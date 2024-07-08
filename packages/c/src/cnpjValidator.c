#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

int calculateFirstVerifier(int cnpjBase[12]) {
    const int weights[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    int sum = 0;

    for (int i = 0; i < 12; i++) {
        sum += cnpjBase[i] * weights[i];
    }

    const int remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
}

int calculateSecondVerifier(int cnpjBase[13], int firstVerifier) {
    const int weights[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    int sum = 0;

    for (int i = 0; i < 12; i++) {
        sum += cnpjBase[i] * weights[i];
    }

    sum += firstVerifier * weights[12];

    const int remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
}

bool cnpjIsValid(const char *cnpj) {
    if (cnpj == NULL) {
        fprintf(stderr, "CNPJ cannot be null or empty\n");
        exit(EXIT_FAILURE); // Termina o programa indicando falha
    }

    char *cnpjClean = strdup(cnpj);
    char *ptr = cnpjClean;
    while (*ptr != '\0') {
        if (*ptr == '.' || *ptr == '-' || *ptr == '/') {
            memmove(ptr, ptr + 1, strlen(ptr));
        } else {
            ptr++;
        }
    }

    if (strlen(cnpjClean) == 0) {
        return false;
    }

    if (cnpjClean[14] != '\0') {
        return false;
    }

    // Convert the string to an array of integers
    int cnpjArray[14];
    for (int i = 0; i < 14; i++) {
        if (!isdigit(cnpjClean[i])) {
            return false;
        }
        cnpjArray[i] = cnpjClean[i] - '0';
    }

    // Calculate the first verifier and second verifier
    int cnpjBase[12];
    for (int i = 0; i < 12; i++) {
        cnpjBase[i] = cnpjArray[i];
    }

    const int firstVerifier = calculateFirstVerifier(cnpjBase);

    int cnpjWithFirstVerifier[13];
    for (int i = 0; i < 12; i++) {
        cnpjWithFirstVerifier[i] = cnpjArray[i];
    }

    const int secondVerifier = calculateSecondVerifier(cnpjWithFirstVerifier, firstVerifier);

    return cnpjArray[12] == firstVerifier && cnpjArray[13] == secondVerifier;
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        fprintf(stderr, "Usage: %s <cpf>\n", argv[0]);
        return 1;
    }

    if (cnpjIsValid(argv[1])) {
        printf("CNPJ is valid\n");
    } else {
        printf("CNPJ is invalid\n");
    }

    return 0;
}
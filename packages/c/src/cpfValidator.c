#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

bool isAllSameDigit(const char *str) {
    char firstChar = str[0];
    for (int i = 1; i < 11; i++) {
        if (str[i] != firstChar) {
            return false;
        }
    }
    return true;
}

bool cpfIsValid(const char *cpf) {
    if (cpf == NULL) {
        fprintf(stderr, "CPF cannot be null or empty\n");
        return false;
    }

    char cpfClean[12] = {0};
    int index = 0;

    for (int i = 0; i < strlen(cpf); i++) {
        if (isdigit(cpf[i])) {
            cpfClean[index++] = cpf[i];
        }
    }

    if (strlen(cpfClean) != 11) {
        return false;
    }

    if (isAllSameDigit(cpfClean)) {
        return false;
    }

    int cpfArray[11];
    
    for (int i = 0; i < 11; i++) {
        cpfArray[i] = cpfClean[i] - '0';
    }

    int sum1 = 0, sum2 = 0;

    for (int i = 0; i < 9; i++) {
        sum1 += cpfArray[i] * (10 - i);
    }

    for (int i = 0; i < 10; i++) {
        sum2 += cpfArray[i] * (11 - i);
    }

    int validator1 = sum1 % 11 < 2 ? 0 : 11 - (sum1 % 11);
    int validator2 = sum2 % 11 < 2 ? 0 : 11 - (sum2 % 11);

    return cpfArray[9] == validator1 && cpfArray[10] == validator2;
}

int main(int argc, char *argv[]) {
    if (argc > 2) {
        fprintf(stderr, "Usage: %s [cpf]\n", argv[0]);
        return 1;
    }

    const char *cpf = argv[1];
    
    if (cpfIsValid(cpf)) {
        printf("CPF is valid.\n");
    } else {
        printf("CPF is invalid.\n");
    }
    return 0;
}

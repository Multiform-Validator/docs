package io.multiform_validator;

public class Cnpj {
    public int calculateFirstVerifier(int[] cnpjBase) {
        int sum = 0;
        int[] weights = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weights[i];
        }

        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    public int calculateSecondVerifier(int[] cnpjBase, int firstVerifier) {
        int sum = 0;
        int[] weights = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        for (int i = 0; i < 13; i++) {
            sum += cnpjBase[i] * weights[i];
        }

        sum += firstVerifier * weights[12];
        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }
}

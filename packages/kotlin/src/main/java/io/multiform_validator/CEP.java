package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class CEP {
    private CEP() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Verifica se um CEP é válido.
     *
     * @param cep CEP a ser verificado.
     * @return true se o CEP é válido, false caso contrário.
     */
    public static boolean isCEP(@NotNull String cep) {
        if (cep.length() < 8 || cep.length() > 10) {
            return false;
        }

        final String cepString = cep.replaceAll("\\D", "");

        if (cepString.length() != 8) {
            return false;
        }

        try {
            Integer.parseInt(cepString);
        } catch (NumberFormatException e) {
            return false;
        }

        return true;
    }
}

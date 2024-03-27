public class CnpjValidator {
    public static boolean isValid(String cnpj) {
        // Remova caracteres especiais do CNPJ
        cnpj = cnpj.replaceAll("[^0-9]", "");

        // Verifique se o CNPJ possui 14 dígitos
        if (cnpj.length() != 14) {
            return false;
        }

        // Verifique se todos os dígitos são iguais
        if (cnpj.matches("(\\d)\\1{13}")) {
            return false;
        }

        // Verifique o primeiro dígito verificador
        int sum = 0;
        int weight = 2;
        for (int i = 11; i >= 0; i--) {
            int digit = Character.getNumericValue(cnpj.charAt(i));
            sum += digit * weight;
            weight = (weight + 1) % 9 + 2;
        }
        int digit1 = (sum % 11 < 2) ? 0 : 11 - (sum % 11);
        if (Character.getNumericValue(cnpj.charAt(12)) != digit1) {
            return false;
        }

        // Verifique o segundo dígito verificador
        sum = 0;
        weight = 2;
        for (int i = 12; i >= 0; i--) {
            int digit = Character.getNumericValue(cnpj.charAt(i));
            sum += digit * weight;
            weight = (weight + 1) % 9 + 2;
        }
        int digit2 = (sum % 11 < 2) ? 0 : 11 - (sum % 11);
        if (Character.getNumericValue(cnpj.charAt(13)) != digit2) {
            return false;
        }

        return true;
    }
}
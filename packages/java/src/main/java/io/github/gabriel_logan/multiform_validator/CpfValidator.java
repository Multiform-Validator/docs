package io.github.gabriel_logan.multiform_validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.IntStream;

public class CpfValidator {
    private CpfValidator() {
        throw new IllegalStateException("Utility class");
    }

    public static boolean cpfIsValid(String cpf) {
        if (cpf == null) {
            throw new NullPointerException("CPF cannot be null or empty");
        }

        final String cpfClean = cpf.replaceAll("\\D", "");

        if (cpfClean.length() != 11) {
            return false;
        }

        Pattern pattern = Pattern.compile("(\\d)\\1{10}");
        Matcher matcher = pattern.matcher(cpfClean);

        if (matcher.find()) {
            return false;
        }

        final int[] cpfArray = cpfClean.chars().map(Character::getNumericValue).toArray();

        final int sum1 = IntStream.range(0, 9).map(i -> cpfArray[i] * (10 - i)).sum();
        final int sum2 = IntStream.range(0, 10).map(i -> cpfArray[i] * (11 - i)).sum();

        final int validator1 = sum1 % 11 < 2 ? 0 : 11 - (sum1 % 11);
        final int validator2 = sum2 % 11 < 2 ? 0 : 11 - (sum2 % 11);

        return cpfArray[9] == validator1 && cpfArray[10] == validator2;
    }
}

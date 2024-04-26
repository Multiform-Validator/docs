package io.multiform_validator

import java.util.*

class Cnpj private constructor() {
    init {
        throw IllegalStateException("Utility class")
    }

    companion object {
        private const val INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty."

        /**
         * Validate CNPJ
         *
         * @param cnpj CNPJ to be validated
         * @return true if CNPJ is valid, false otherwise
         */
        fun isValid(cnpj: String): Boolean {
            require(!cnpj.isBlank()) { INPUT_VALUE_CANNOT_BE_EMPTY }

            if (cnpj.length != 14 && cnpj.length != 18) {
                return false
            }

            try {
                val cnpjClean = cnpj.replace("\\D".toRegex(), "")

                val cnpjArray = cnpjClean.chars().map { codePoint: Int -> Character.getNumericValue(codePoint) }.toArray()

                val firstVerifier = calculateFirstVerifier(Arrays.copyOfRange(cnpjArray, 0, 12))
                val secondVerifier = calculateSecondVerifier(Arrays.copyOfRange(cnpjArray, 0, 13), firstVerifier)

                return cnpjArray[12] == firstVerifier && cnpjArray[13] == secondVerifier
            } catch (e: Exception) {
                return false
            }
        }

        private fun calculateFirstVerifier(cnpjBase: IntArray): Int {
            var sum = 0
            val weights = intArrayOf(5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)

            for (i in 0..11) {
                sum += cnpjBase[i] * weights[i]
            }

            val remainder = sum % 11

            return if (remainder < 2) 0 else 11 - remainder
        }

        private fun calculateSecondVerifier(cnpjBase: IntArray, firstVerifier: Int): Int {
            var sum = 0
            val weights = intArrayOf(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)

            for (i in 0..12) {
                sum += cnpjBase[i] * weights[i]
            }

            sum += firstVerifier * weights[12]
            val remainder = sum % 11

            return if (remainder < 2) 0 else 11 - remainder
        }
    }
}

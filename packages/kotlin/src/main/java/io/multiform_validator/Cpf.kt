package io.multiform_validator

class Cpf private constructor() {
    init {
        throw IllegalStateException("Utility class")
    }

    companion object {
        private const val INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty."

        /**
         * Validate a CPF number.
         *
         * @param cpf The CPF number to be validated.
         * @return True if the CPF number is valid, false otherwise.
         */
        fun isValid(cpf: String): Boolean {
            require(!cpf.isBlank()) { INPUT_VALUE_CANNOT_BE_EMPTY }

            try {
                var baseNumber = 10
                var baseNumber2 = 11

                var somaTotal = 0
                var somaTotal2 = 0

                if (cpf.length != 11 && cpf.length != 14) {
                    return false
                }

                val cpfClean = cpf.replace("\\D".toRegex(), "")

                if (cpfClean.chars().allMatch { c: Int -> c == cpfClean[0].code }) {
                    return false
                }

                var firstVerifier = 0
                var secondVerifier = 0

                val ninthCharAsInt = cpfClean[9].toString().toInt()
                val tenthCharAsInt = cpfClean[10].toString().toInt()

                for (repeater in 0..10) {
                    val currentCharAsInt = cpfClean[repeater].toString().toInt()

                    val multiplicative = currentCharAsInt * baseNumber

                    baseNumber--
                    somaTotal += multiplicative

                    val multiplicative2 = currentCharAsInt * baseNumber2

                    baseNumber2--
                    somaTotal2 += multiplicative2

                    val verificationValue = somaTotal - ninthCharAsInt
                    val verificationValue2 = somaTotal2 - tenthCharAsInt
                    firstVerifier = 11 - (verificationValue % 11)
                    secondVerifier = 11 - (verificationValue2 % 11)
                }
                if (firstVerifier > 9) {
                    firstVerifier = 0
                }
                if (secondVerifier > 9) {
                    secondVerifier = 0
                }

                return firstVerifier == ninthCharAsInt && secondVerifier == tenthCharAsInt
            } catch (e: Exception) {
                return false
            }
        }
    }
}

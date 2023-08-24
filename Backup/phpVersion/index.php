<?php
class Calculator {
    public function add($a, $b) {
        return $a + $b;
    }

    public function subtract($a, $b) {
        return $a - $b;
    }

    public function multiply($a, $b) {
        return $a * $b;
    }

    public function divide($a, $b) {
        if ($b != 0) {
            return $a / $b;
        } else {
            return "Cannot divide by zero.";
        }
    }
}

$calculator = new Calculator();
$result = $calculator->add(10, 5);
echo "Addition: " . $result . "<br>";

$result = $calculator->subtract(20, 8);
echo "Subtraction: " . $result . "<br>";

$result = $calculator->multiply(4, 6);
echo "Multiplication: " . $result . "<br>";

$result = $calculator->divide(15, 3);
echo "Division: " . $result . "<br>";
?>

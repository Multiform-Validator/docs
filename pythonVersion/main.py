# main.py
from my_calculator_package.src.calculator import add, subtract, multiply, divide

def main():
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))

    print("Addition:", add(num1, num2))
    print("Subtraction:", subtract(num1, num2))
    print("Multiplication:", multiply(num1, num2))
    print("Division:", divide(num1, num2))

if __name__ == "__main__":
    main()

import random

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def generate_random_matrix(rows, cols):
    return [[random.randint(1, 100) for _ in range(cols)] for _ in range(rows)]

def shuffle_list(lst):
    shuffled = lst.copy()
    random.shuffle(shuffled)
    return shuffled

if __name__ == "__main__":
    num = random.randint(1, 1000)
    print(f"Generated random number: {num}")

    prime_check = is_prime(num)
    if prime_check:
        print("The number is prime.")
    else:
        print("The number is not prime.")

    matrix = generate_random_matrix(3, 3)
    print("Generated random matrix:")
    for row in matrix:
        print(row)

    original_list = [1, 2, 3, 4, 5]
    shuffled_list = shuffle_list(original_list)
    print("Original list:", original_list)
    print("Shuffled list:", shuffled_list)

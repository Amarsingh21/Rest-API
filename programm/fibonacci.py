n = int(input("Enter a number: "))

# initialize the first two terms
a, b = 0, 1

# print the first term
print(a, end=", ")

# print the second term if it is less than n
if b <= n:
    print(b, end=", ")

# loop through the series and print each term that is less than n
while a+b <= n:
    c = a + b
    print(c, end=", ")
    a = b
    b = c

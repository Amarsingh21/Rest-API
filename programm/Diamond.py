n = int(input("Please enter your lucky number: "))

# First half of the pattern
for i in range(1, n+1):
    print(" "*(n-i), end="")
    for j in range(1, i*2):
        if j % 2 == 1:
            print(j, end=" ")
        else:
            print("", end="")
    for k in range(0,i-1):
        print(chr(63+i+k), end=" ")
    print("")

# Second half of the pattern
for i in range(n-1, 0, -1):
    print(" "*(n-i), end="")
    for j in range(1, i*2):
        if j % 2 == 1:
            print(j, end=" ")
        else:
            print("", end="")
    for k in range(0,i-1):
        print(chr(63+i+k), end=" ")
    print("")

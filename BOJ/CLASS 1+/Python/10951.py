# A+B - 4
while True:
    try:
        print(sum(map(int, input().split())))
    except EOFError:
        break
# A+B - 3
t = int(input())

print('\n'.join(str(sum(map(int, input().split()))) for _ in range(t)))
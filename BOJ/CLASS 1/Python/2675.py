# 문자열 반복
t = int(input())

result = []

for _ in range(t):
    r, s = input().split()
    r = int(r)

    result.append(''.join(char * r for char in s))

print('\n'.join(result))
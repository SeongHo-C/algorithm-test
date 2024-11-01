# 팩토리얼 0의 개수
n = int(input())

count = 0
i = 5

while i <= n:
    count += n // i
    i *= 5

print(count)

# hint: 팩토리얼에서 뒤에 붙는 0의 개수를 결정하는 것은 2와 5의 곱이다.
"""
def DFS(n):
    if n == 0: return 0
    if n == 1: return 1
    else: return n * DFS(n - 1)

fac = str(DFS(n))
reverse_fac = str(int(fac[::-1]))
print(len(fac) - len(reverse_fac))

1. 메모리 효율성: N이 커질수록 팩토리얼 값이 매우 커져서 메모리 문제가 발생
2. 시간 복잡도: 재귀 호출로 인해 스택 오버플로우가 발생
"""
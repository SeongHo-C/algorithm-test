# 팩토리얼 0의 개수
n = int(input())

def DFS(n):
    if n == 0: return 0
    if n == 1: return 1
    else: return n * DFS(n - 1)

fac = str(DFS(n))
reverse_fac = str(int(fac[::-1]))
print(len(fac) - len(reverse_fac))
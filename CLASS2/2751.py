# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
import sys
input = sys.stdin.readline
N = int(input())
data = []

for i in range(N):
        data.append(int(input()))
    
# 오름차순 정렬  
data.sort()

print(*data, sep='\n')
    
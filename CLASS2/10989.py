# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
import sys

input = sys.stdin.readline
N = int(input())
    
count = [0] * 10001

for i in range(N):
    count[int(input())] += 1
    
for i in range(1, 10001):
    while count[i]:
        print(i)
        count[i] -= 1
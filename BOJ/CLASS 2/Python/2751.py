# 수 정렬하기 2
import sys

input = sys.stdin.readline
n = int(input())
nums = [int(input()) for _ in range(n)]

# sort(): Timsort 알고리즘을 사용하여 O(nlogn)의 시간복잡도를 보장
nums.sort()

print('\n'.join(map(str, nums)))
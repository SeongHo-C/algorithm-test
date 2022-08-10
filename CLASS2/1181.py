# 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

# 1. 길이가 짧은 것부터
# 2. 길이가 같으면 사전 순으로
import sys
input = sys.stdin.readline

N = int(input())
data = []

for i in range(N):
    input_value = input().rstrip()
    # 중복 방지
    if input_value not in data: 
        data.append(input_value)

result = sorted(data, key = lambda x: (len(x), x))

print(*result, sep='\n')
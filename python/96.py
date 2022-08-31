# 내가 푼 방법(min() 함수 이용)
# m, n = map(int, input().split())

# result = 0
# for i in range(n):
#     data = list(map(int, input().split()))
#     if result < min(data): result = min(data)

# print(result)

# 2중 반복문 구조를 이용하는 방법

m, n = map(int, input().split())

result = 0
for i in range(n):
    data = list(map(int, input().split()))
    min_value = 10001
    for a in data:
        min_value = min(min_value, a)
        
    result = max(result, min_value)    
print(result)
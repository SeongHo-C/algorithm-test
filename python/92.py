# 내가 푼 방법
# n, m, k = map(int, input().split())
# data = list(map(int, input().split()))
# data.sort()
# sum = 0

# for i in range(m):
#     if i < k: sum += data[-1]
#     else:
#         sum += data[-2]
#         k += ++k
    
# print(sum)

# 수열을 이용한 방법
n, m, k = map(int, input().split())
data = list(map(int, input().split()))
data.sort()

first = data[n - 1]
second = data[n - 2]

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

sum = 0
sum += count * first
sum += (m - count) * second

print(sum)
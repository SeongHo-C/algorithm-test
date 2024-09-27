# 검증수
data = list(map(int, input().split()))

"""
# 내 풀이 방법
total = 0

for i in data:
    total += i ** 2

print(total % 10)
"""

# 리스트 컴프리헨션 사용
print(sum(i ** 2 for i in data) % 10)
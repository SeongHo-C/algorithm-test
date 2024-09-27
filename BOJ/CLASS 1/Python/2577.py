# 숫자의 개수
a, b, c = (int(input()) for _ in range(3))

result = str(a * b * c)

"""
# 내 풀이 방법
for i in range(10):
    print(result.count(str(i)))
"""

# 리스트 컴프리헨션 사용
print("\n".join(str(result.count(str(i))) for i in range(10)))
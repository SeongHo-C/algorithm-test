# 최댓값
max_value = 0
order = 0

"""
# 내 풀이 방법
for i in range(9):
  num = int(input())

  if max_value < num: 
    max_value = num
    order = i + 1
"""

# 리스트 컴프리헨션을 사용하여 입력을 간결하게 받는 방법
numbers = [int(input()) for _ in range(9)]
max_value = max(numbers)
order = numbers.index(max_value) + 1

print(f'{max_value}\n{order}')
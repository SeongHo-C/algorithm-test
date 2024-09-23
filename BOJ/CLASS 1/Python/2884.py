# 알람 시계
h, m = map(int, input().split())

if m >= 45: m -= 45
else:
  m += 15
  h = 23 if h == 0 else h - 1

print(h, m)
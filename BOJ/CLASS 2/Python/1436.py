# 영화감독 숌
n = int(input())

start_num = 666
order = 1

while order < n:
    start_num += 1
    if '666' in str(start_num): order += 1

print(start_num)
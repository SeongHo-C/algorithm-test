# 체스판 다시 칠하기
n, m = map(int, input().split())
data = [input() for _ in range(n)]

white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

result = 2500

# 8x8 크기의 체스판 자르기
for i in range(n - 7):
    for j in range(m - 7):
        count_w = 0
        count_b = 0

        # 다시 칠해야 하는 정사각형의 개수 구하기
        for k in range(8):
            for s in range(8):
                if data[i + k][j + s] != white[k][s]: count_w += 1
                if data[i + k][j + s] != black[k][s]: count_b += 1

        result = min(result, count_w, count_b)

print(result)
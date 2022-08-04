N = input()
row, column = int(N[1]), int(ord(N[0])) - int(ord('a')) + 1 

steps = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, 1), (2, -1)]
count = 0

for step in steps:
    next_row = row + step[0]
    next_column = column + step[1]

    if next_row < 1 or next_column < 1 or next_row > 8 or next_column > 8:
        continue
    
    count += 1
    
print(count)



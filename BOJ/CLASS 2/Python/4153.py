# 직각삼각형
while(True):
    # a, b, c = sorted(list(map(int, input().split())))
    a, b, c = sorted(map(int, input().split()))

    if a == 0 and b == 0 and c == 0: break

    print('right' if (a ** 2 + b ** 2) == c ** 2 else 'wrong')

"""
sort() 메서드 사용: 리스트를 제자리에서(in-place) 정렬, None 반환
sorted() 함수 사용: 정렬된 새로운 리스트를 반환
"""
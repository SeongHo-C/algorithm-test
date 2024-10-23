# 팰린드롬수
while True:
    num = input()

    if num == '0': break

    # r_num = int(''.join(reversed(str(num))))
    # print('yes' if num == r_num else 'no')

    # reversed 대신 슬라이싱 활용
    print('yes' if num == num[::-1] else 'no')
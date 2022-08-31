# 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
import math

N = int(input())
data = list(map(int, input().split()))

count = 0
# 소수 판별
def is_prime_number(x):
    if x < 2:
        return False
    elif x == 2 or x == 3:
        return True
    else:
        for i in range(2, int(math.sqrt(x)) + 1):
            if x % i == 0:
                return False   
        return True
   
for i in range(N):
     if is_prime_number(data[i]):
         count += 1
         
print(count)
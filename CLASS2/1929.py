# M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
import math

M, N = map(int, input().split())
array = [True for i in range(N + 1)]
array[1] = False

for i in range(2, int(math.sqrt(N) + 1)):
    if array[i] == True:
        j = 2
        while i * j <= N:
            array[i * j] = False
            j += 1
            
for i in range(M, N + 1):
    if array[i]:
        print(i) 
        
        
        
        
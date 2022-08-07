# N명의 학생 정보가 있다. 학생 정보는 학생의 이름과 학생의 성적으로 구분된다.
# 각 학생의 이름과 성적 정보가 주어졌을 때 성적이 낮은 순서대로 학생의 이름을 출력하는 프로그램을 작성하시오.
N = int(input())
data = []

for _ in range(N):
    data.append(input().split())
    
def setting(x):
    return x[1]

array = sorted(data, key = setting)
# sorted(data, key=lambda student: sturdent[1])
for student in array:
    print(student[0], end=' ')


    

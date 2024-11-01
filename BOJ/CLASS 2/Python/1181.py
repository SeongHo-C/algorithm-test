# 단어 정렬
n = int(input())
words = list(set([input() for _ in range(n)]))

words.sort(key = lambda x: (len(x), x))

print('\n'.join(words))
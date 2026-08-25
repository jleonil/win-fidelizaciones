import sys
content = open('test.js', encoding='utf-8').read()
print('(', content.count('('), ')', content.count(')'))
print('[', content.count('['), ']', content.count(']'))
print('\'', content.count(\"'\"))
print('\"', content.count('\"'))
print('\', content.count('\'))

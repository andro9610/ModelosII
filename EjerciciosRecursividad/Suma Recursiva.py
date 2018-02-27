def multiplica(num1, num2):
    if(num2<=1):
          return num1
    else:
        return num1 + multiplica(num1,num2-1)

print (multiplica(180,15))

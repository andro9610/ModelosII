def invierte(num1):
    if (num1<10):
        return str(num1)
    else:
        return str(num1%10)+(invierte(int(num1/10)))

print (invierte(84864))
numero = raw_input('Ingrese numero:')
lista = list(numero)
if lista == lista.reverse():
    print 'el numero es un palindromo'
else:
    print 'no lo es'

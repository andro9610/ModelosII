#algoritmo de fibonacci Recursivo
def fibonacci(numero):
    if numero == 0:
        return 0
    if numero == 1:
        return 1
    if numero > 1:
        print('Calculando...')
        return(fibonacci(numero-2)+fibonacci(numero-1))

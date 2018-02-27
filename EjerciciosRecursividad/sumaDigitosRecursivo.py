def sumarDigitos(numero):
    if numero >= 10:
        return(numero%10+sumarDigitos(numero/10))
    else:
        return numero

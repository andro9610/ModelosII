def divRecu(dividen, divisor):
    if(dividen<divisor):
        return 0;
    else:
        return 1+divRecu(dividen-divisor,divisor);


dividen=int(input("\n Ingrese el divideno:"))
divisor=int(input("\n Ingrese el dividendo"))
print("La division es:"+str(divRecu(dividen, divisor)));

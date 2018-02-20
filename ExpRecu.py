def expRecu (base,expo):
    if(expo==0):
        return 1;
    else:
        return base * expRecu(base,expo-1);

base=int(input("\n Ingrese la base:"))
expo=int(input("\n Ingrese el exponente:"))
print("El vlaor es"+str(expRecu(base,expo)));

def expRecu (base,expo):
    if(expo==0):
        return 1;
    else:
        return base * expRecu(base,expo-1);

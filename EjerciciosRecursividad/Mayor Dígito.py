def ordena(n):
    if(n<=0):
        return 0
    else:
        if((n%10)<ordena(n/10)):
            return ordena(n/10)
        else:
            return int(n%10)

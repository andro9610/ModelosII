def divRecu(dividen, divisor):
    if(divisor != 0):
       if(dividen<divisor):
        return 0;
       else:
         return 1+ divRecu(dividen-divisor,divisor);
    else:
           print('Error por división entre 0')

// Fizz buzz, compara valor e retorna algo baseado no valor


var idade = retornaIdade(16);
console.log(idade)

function retornaIdade(entrada){
     if (typeof entrada !== 'number')
      return 'não é um numero';
     
     if (entrada <= 16)
      return'adoslecente';

     if(entrada >16 && entrada <18)
       return ' Pre Adulto';
    
       return 'Adulto'
     }

    // Function -> Retorna adoslecente,pre adulto ou adulto mediante a idade.

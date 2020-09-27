somar(10);

function somar(limite){

    var mult3 = 0;
    var mult5 = 0;

    for ( i =0; i<= limite; i++){
        if (i % 3 === 0)
        mult3 += i;
        if ( i % 5 === 0)
        mult5 += i;
    }
    console.log(mult5 + mult3)
}

// Function retorna a soma dos numeros multiplos de 3 e 5.
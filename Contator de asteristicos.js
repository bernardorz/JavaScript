exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    for(var linha =1; linha <=linhas; linha++){
        var padrao ='';
        for(var i = 0; i < linha; i++){
            padrao += '*'
        }
        console.log(padrao)
    }
}

//Exibe a quantidade de caracteres em ordem crescente

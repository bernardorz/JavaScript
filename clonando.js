
const celular = {
    marcaCelular : 'Asus',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    ligar : function (){
        console.log('fazendo ligação')
    }
}

const NovoObjeto= Object.assign({
    bateria : 5000
},celular)
console.log(NovoObjeto)

// outro metodo de clonar

const ob2 = {...celular};
console.log(ob2)
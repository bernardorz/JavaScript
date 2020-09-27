
//pascal Case -UmDoisTresQuatro
function Celular(marcacelular,tamanhotela,capacidadebateria){
    this.marcacelular = marcacelular,
    this.tamanhotela = tamanhotela,
    this.capacidadebateria= capacidadebateria
    this.ligar = function(){
        console.log('Fazendo Ligação')
    }
}

const celular = new Celular('Asus',5.5,5000);
console.log(celular);

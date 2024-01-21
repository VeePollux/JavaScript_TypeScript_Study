//Objetos - Introdução

function Pessoa(nome, sobrenome, idade){ //parametros da função
    return{
        nome : nome, //uma forma de fazer
        sobrenome, idade //outra forma de fazer para não repetir
    }
}

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();

pessoa3 = Pessoa('Lucas', 'Santos', 20); //argumentos da função
pessoa2 = Pessoa('João', 'Silva', 30);
console.log(pessoa3.nome);
console.log(pessoa2.nome);
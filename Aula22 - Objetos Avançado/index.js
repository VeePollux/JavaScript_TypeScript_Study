//defineProperty - defineProperties
/*
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar
        configurable: true //configurável
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: false, //pode alterar
            configurable: true //configurável
        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: false, //pode alterar
            configurable: true //configurável
        }
    })
}
*/

//get - set

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configurável
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Valor inválido');
            }
            estoque = valor;
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

//prototypes - herança
//Object.prototype

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Rafael', 'Santos');
console.log(pessoa1.nomeCompleto());

//get prototype e set prototype
//Object.getPrototypeOf() - Object.setPrototypeOf()



Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const camisa = new Produto('Camiseta', 50);

Object.setPrototypeOf(camisa, Produto.prototype);
camisa.desconto(100);
console.log(camisa);


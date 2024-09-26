//Atribuição via desestruturação (Arrays)

let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

const numeros = [4, 5, 6];
[a, b, c] = numeros;
console.log(a, b, c); // 4 5 6

a = 'A';
b = 'B';
c = 'C';
const letras = [b, c, a];
[a,b,c] = letras;
console.log(a, b, c);

console.log(typeof letras);

//rest operator
const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000];
const [um, dois, ...resto] = numeros2;
console.log(um, dois);
console.log(resto);


// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);

const {nome: n, sobrenome: s, idade: i} = pessoa;
console.log(n, s, i);

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

const {endereco} = pessoa;
console.log(endereco);

const {endereco: {rua: r = 'Rua não existe', numero: num = 'Número não existe'}} = pessoa;
console.log(r, num);
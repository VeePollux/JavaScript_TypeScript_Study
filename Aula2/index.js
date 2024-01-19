let nomeUsuario = "João";
let nomeusuario = "Maria";
let teste; //undefined - nao inicializada 
var idade = 20; //Nao usar mais var
console.log("Olá, " + nomeUsuario + "!");
console.log("Olá," , nomeUsuario, "!");
console.log("Olá, " + nomeusuario + "!"); //Case sensitive

const idade1 = 20; 
const idade2 = 30; 
const soma = idade1 + idade2;
console.log(soma);
console.log(typeof(soma));
console.log(typeof(nomeUsuario));

//template string
console.log(`Olá, ${nomeUsuario} !`);

const sobrenomeUsuario = null;
console.log(`Olá, ${nomeUsuario} ${sobrenomeUsuario}!`);
console.log(typeof(sobrenomeUsuario));
console.log(typeof(teste));

const aprovado = true;
console.log(typeof(aprovado));

//Dados primitivos - string, number, boolean, undefined, null, symbol.
//Dados por referencia - array, object, function


//operadores de atribuição
let contador = 1;
const incremento = 50;
console.log(contador);
console.log(++contador); //pre-incremento
console.log(contador++); //pos-incremento
console.log(contador); 


contador += incremento;
console.log(contador);
contador *= incremento;
console.log(contador);
contador **= 10;

//NaN - Not a Number
const num1 = 10;
const num2 = Number('5');
const num3 = parseInt('5');
const num4 = parseFloat('5.2');
console.log(num1 + num2);
console.log(typeof(num2));
console.log(num1 + num3);
console.log(typeof(num3));
console.log(num1 + num4);
console.log(typeof(num4));

//troca de valores
let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);
[varA, varB, varC] = [varB, varC, varA]; 
console.log(varA, varB, varC);


//string 

let umaString = "Um texto";
console.log(umaString[4]);
console.log(umaString.charAt(5));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('m'));
console.log(umaString.match(/[a-z]/g)); //expressao regular
console.log(umaString.search(/x/)); 
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.length);
console.log(umaString.slice(1, 5));
console.log(umaString.split(' '));

///Numbers
let umNumero = 10.765;
let outroNumero = 3;
console.log(umNumero.toString() + outroNumero);
console.log(umNumero.toFixed(2));
console.log(umNumero.toString(2)); //binario

let numero1 = 0.7;
let numero2 = 0.1;
numero1 += numero2;
numero1 += numero2;
numero1 += numero2;
console.log(numero1);
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(1.00));
numeroTeste = (numero1.toFixed(2));
console.log(numeroTeste);
console.log(Number.isInteger(numeroTeste)); //Mesmo que arredondado, continua sendo float
numero1 = parseFloat(numero1.toFixed(2));
console.log(numero1);
console.log(Number.isInteger(numero1)); //Transformado em inteiro
numero1 = Number(numero1.toFixed(2)); // Resolve também pois o Number converte pra melhor forma


//Math
console.log(Math.PI);
console.log(Math.random() * (10 - 5) + 5); //random entre 5 e 10
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(100 / 0); //Infinity  NAO DA ERRO

//Arrays
console.log("ARRAYS");
let alunos = ['João', 'Maria', 'José'];
console.log(typeof(alunos));
console.log(alunos instanceof Array);
console.log(alunos);
console.log(alunos[0]);
alunos = 123; //pode mudar o tipo da variavel
console.log(typeof(alunos));
console.log(alunos instanceof Array);
alunos = ['João', 'Maria', 'José'];
alunos.push('Pedro'); //adiciona no final
console.log(alunos);
alunos.unshift('Luiz'); //adiciona no inicio
console.log(alunos);
alunos.pop(); //remove do final
console.log(alunos);
alunos.shift(); //remove do inicio
console.log(alunos);
console.log(alunos.slice(0, 2));
console.log(alunos.slice(0, -2));

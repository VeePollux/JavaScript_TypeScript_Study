/*
Em JavaScript, as variáveis primitivas são imutáveis porque, 
quando você atribui um valor a uma variável primitiva, o valor 
em si é armazenado diretamente na variável. As variáveis primitivas 
em JavaScript incluem number, string, boolean, null, undefined, e symbol.

Quando você realiza operações em variáveis primitivas, como reatribuir 
um valor ou realizar operações matemáticas em um número, você está, 
na verdade, criando um novo valor e atribuindo-o à variável. Isso não
 altera o valor original armazenado na variável.
*/

let str = "Olá";
str = str + ", Mundo!";
console.log(str); // Resultado: "Olá, Mundo!"
//Ao concatenar as strings, você cria uma nova
// string e atribui à variável str.

let isTrue = true;
isTrue = !isTrue;
console.log(isTrue); // Resultado: false
//Negar o valor booleano cria um novo valor 
//e o atribui à variável isTrue.

//Por referência

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
  };
  //const b = a; // b recebe a referencia de a
  const b = {...a}; // b recebe uma copia de a
  
  b.nome = 'João';
  console.log(a);
  console.log(b);
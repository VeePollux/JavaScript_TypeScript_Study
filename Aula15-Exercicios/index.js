// Escreva uma função que recebe 2 números e retorne o maior deles

function returnMaxValue( num1, num2){
    return num1 > num2 ? num1 : num2;}

const returnMaxValue2 = (x, y) => x > y ? x:y;

const num1 = 9;
const num2 = 5;

console.log(returnMaxValue(num1, num2));
console.log(returnMaxValue2(num1, num2));

//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura  > altura;

console.log(ePaisagem(1920, 1080));

//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número
//Use a função com números de 0 a 100

function fizzBuzz(num){
    if(typeof num  !== 'number') return "Não é um número";
    if(num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
    if(num % 3 == 0) return "Fizz";
    if(num % 5 == 0) return "Buzz";
    return num;
}
console.log(fizzBuzz("a"));

for(let i = 0; i <= 100;i++){
    console.log(i ,fizzBuzz(i));
}


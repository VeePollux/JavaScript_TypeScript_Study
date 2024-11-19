//argumentos que sustentam todas as funções
//arguments não funciona com arrow function
function myFunction() {
    return arguments;
}
console.log(myFunction(1, 2, 3, 4, 5));

function myFunction2() {
    return Array.from(arguments);
}
console.log(myFunction2(1, 2, 3, 4, 5));

function myFunction3() {
    return [...arguments];
}
console.log(myFunction3(1, 2, 3, 4, 5));

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

const conta2 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta2('+', 0, 20, 30, 40, 50);

 function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Funções de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {  //Simulando uma requisição assíncrona
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

//IIIFE -> Immediately Invoked Function Expression
(function(idade){
    const nome = `Vanessa`;
    function criaSobrenome(sobrenome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaSobrenome('Santos'));
    }

    falaNome();
    console.log(idade);
})(25);

const sobrenome = `Qualquer coisa`;
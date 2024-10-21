//Exercicios FOR

for (let i = 0; i<=10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia', 'Laranja', 'Morango', 'Abacaxi', 'Limão', 'Mamão'];

for (let index in frutas){
    console.log(index, frutas[index]);
}

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Santos',
    idade: 21
};

for(let key in pessoa){
    console.log(key, pessoa[key]);
}

for(let value of frutas){
    console.log(value);
}
console.log('************');
frutas.forEach((value, index) => {
    console.log(index, value);
});
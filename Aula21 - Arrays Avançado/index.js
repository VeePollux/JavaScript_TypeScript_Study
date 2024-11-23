//Arrays - Valor por Referência
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes; // Aponta para o mesmo endereço de memória
const novo2 = [...nomes]; // Cria um novo endereço de memória
console.log(nomes);
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);

//Splice
//nomes.splice(indice, delete, elem1, elem2, elem3);
const nomes2 = ['Eduardo', 'Maria', 'Joana', 'João'];
const removidos = nomes2.splice(2, 1);
console.log(nomes2, removidos);
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'João'];
const removidos2 = nomes3.splice(2, Number.MAX_VALUE); // Remove todos os elementos a partir do índice 2
console.log(nomes3, removidos2);
nomes3.splice(0, 0, 'Luiz'); // Adiciona o elemento 'Luiz' no índice 0 e não remove nenhum elemento
console.log(nomes3);
nomes3.splice(0, 1, 'Luiza'); // Adiciona o elemento 'Luiza' no índice 1 e remove  elemento
console.log(nomes3);

//concatenando arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
console.log(a3);

//...rest  ...spread
const a4 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]; //spread operator espalha os elementos do array
console.log(a4);

//Filter
const numeros = [1, 2, -3, 4, 5, 0, 7, -8, 9, 19];
const filtrados = numeros.filter(valor => valor > 0);
console.log(filtrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
console.log(pessoas);

for(let pessoa of pessoas) {
    console.log(pessoa.nome);
}

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50Anos = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasComMaisDe50Anos);

const pessoasComNomeTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeTerminaComA);

//Map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros2.map(valor => valor * 2);
console.log(numerosEmDobro);

const pessoas2 = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes4 = pessoas2.map(obj => obj.nome);
console.log(nomes4);
const idades = pessoas2.map(obj => ({ idade: obj.idade }));
console.log(idades);
const comIds = pessoas2.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
});
console.log(comIds);

//reduce - Retornar um único valor
//Some todos os números (reduce)

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros3.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(total);

//Retorne um array com o dobro dos valores
const arrayDobro = numeros3.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(arrayDobro);

//Retorne a pessoa mais velha
const maisVelha = pessoas2.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
//Filter, Map e Reduce
//Retorne a soma do dobro de todos os pares
//Filtra pares
//Dobra os valores
//Reduce soma tudo
const numerosPares = numeros3
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor, 0);

console.log(numerosPares);

//forEach - Funciona como um for, mas não retorna nada
const a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total2 = 0;
a5.forEach(valor => total2 += valor);
console.log(total2);





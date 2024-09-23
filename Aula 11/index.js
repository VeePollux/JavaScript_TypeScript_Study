//Operação ternária

const corUsuario = null
const corPadrao = corUsuario || "Preto";
console.log(corPadrao);

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal';
console.log(nivelUsuario);

const data = new Date(2019, 0); //Intervalo do mês: 0 a 11. 0 - Janeiro
console.log(data.toString());
console.log('Dia da semana: ', data.getDay()); //Domingo - 0 e Sábado - 6

const date = new Date('2019-04-20 20:20:59');
console.log(date.toString());

function zeroEsquerda(num){
    return num >= 10 ? num: `0${num}`;

}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    return `${dia}/${mes}/${ano}`
}

const data1 = new Date();
console.log((formataData(data1)));



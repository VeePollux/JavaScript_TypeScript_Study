/*Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ****
=== igualdade estrita (valor e tipo) ****
!= diferente (valor) ****
!== diferente estrito (valor e tipo) ****
*/

 console.log(10 == 5);
 console.log(10 == '10'); //Comparando apenas o valor
 console.log(10 === '10'); //Comparando o valor e o tipo
 

 //Operadores lógicos
//&& -> AND -> E
//|| -> OR -> OU
//! -> NOT -> NÃO

//curto circuito
/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

//Falsy -> false, 0, '', "", ``, null, undefined, NaN
//Truthy -> Todos os demais valores

//AND 
console.log('Luiz' && true && 'Maria'); //Retorna o último valor verdadeiro
console.log('Luiz' && true && NaN); //Retorna o primeiro valor falso

function falaOi(){
    return 'Oi';
}   

const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); //Se vaiExecutar for falso, não executa a função  

//OR
console.log(0 || false || null || 'Luiz Otávio' || true); //Retorna o primeiro valor verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; //Se o usuário não escolher a cor, a cor padrão será preto
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //String não vazia
//const c = ''; //String vazia
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //Retorna o primeiro valor verdadeiro
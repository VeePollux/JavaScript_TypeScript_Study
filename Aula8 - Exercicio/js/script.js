//IIFF - Immediately Invoked Function Expression

function meuEscopo (){
    const form = document.querySelector('.form'); //Sempre que for selecionar classe, colocar o ponto antes do nome da classe
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

function recebeEventoForm (evento){
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    //console.log(nome.value, sobrenome.value, peso.value, altura.value);

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value}  ${sobrenome.value}  ${peso.value}  ${altura.value}</p>`
}


form.addEventListener('submit', recebeEventoForm);

//Outra forma
//    form.onsubmit = function (evento){
//        evento.preventDefault(); //Previnir o comportamento padrão do formulário, que é enviar os dados para o servidor e atualizar a página
//        alert('Form enviado');
//        console.log('Foi enviado');
//     };
}

meuEscopo();
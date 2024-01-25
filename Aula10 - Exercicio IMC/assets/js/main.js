
const form = document.querySelector('.form'); //Sempre que for selecionar classe, colocar o ponto antes do nome da classe
const result = document.querySelector('.result');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    result.innerHTML = ``;
    const p = document.createElement('p')

    if(isNaN(peso.value)){
        p.innerHTML += `<p>Peso inválido</p>`;
        p.classList.add('bad-result');}
    else if(isNaN(altura.value)){
        p.innerHTML += `<p>Altura inválida</p>`;
        p.classList.add('bad-result');}
    else{
        const imc = (Number(peso.value)/Number(altura.value)**2).toFixed(2);
        console.log(imc);
        if(imc < 18.5){
            p.innerHTML += `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
            p.classList.add('warning-result');}
        else if(imc >= 18.5 && imc <= 24.9){
            p.innerHTML += `<p>Seu IMC é ${imc} (Peso normal)</p>`;
            p.classList.add('good-result');}
        else if(imc >= 25 && imc <= 29.9){
            p.innerHTML += `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
            p.classList.add('warning-result');}
        else if(imc >= 30 && imc <= 34.9){
            p.innerHTML += `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
            p.classList.add('warning-result');}
        else if(imc >= 35 && imc <= 39.9){
            p.innerHTML += `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
            p.classList.add('warning-result');}
        else {
            p.innerHTML += `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
            p.classList.add('warning-result');}
    }
    result.appendChild(p);

});

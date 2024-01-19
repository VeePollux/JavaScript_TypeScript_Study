const valorDigitado = prompt("Digite seu nome:"); 
const quantidadeLetras = valorDigitado.length;
const segundaLetra = valorDigitado[1];

window.document.body.innerHTML = `Seu nome é <strong>${valorDigitado}</strong> e ele tem ${quantidadeLetras} letras. <br> A segunda letra do seu nome é ${segundaLetra}.`;
window.document.body.innerHTML += `<br> O primeiro indice da letra "a" do seu nome é ${valorDigitado.indexOf('a') + 1}.`;
window.document.body.innerHTML += `<br> O ultimo indice da letra "a" do seu nome é ${valorDigitado.lastIndexOf('a') + 1}.`;
window.document.body.innerHTML += `<br> As ultimas 3 letras do seu nome são ${valorDigitado.slice(-3)}.`;
window.document.body.innerHTML += `<br> As palavras do seu nome são ${valorDigitado.split(' ')}.`;





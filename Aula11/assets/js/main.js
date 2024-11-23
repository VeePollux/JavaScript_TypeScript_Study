// function formatDate(date){
//     const dayMonth = date.getDay();
//     const month = date.getMonth();
//     let formatedDate, formatedDayMonth, formatedMonth = '';
//     switch (dayMonth){
//         case 0:
//             formatedDayMonth = 'Domingo, ';
//             break;
//         case 1:
//             formatedDayMonth = 'Segunda-Feira, ';
//             break;
//         case 2:
//             formatedDayMonth = 'Terça-Feira, ';
//             break;
//         case 3:
//             formatedDayMonth= 'Quarta-Feira, ';
//             break;
//         case 4:
//             formatedDayMonth = 'Quinta-Feira, ';
//             break;
//         case 5:
//             formatedDayMonth = 'Sexta-Feira, ';
//             break;
//         case 6:
//             formatedDayMonth = 'Sábado, ';
//             break;
//         default:
//             formatedDayMonth = 'Erro, ';
//             break;}
//
//     switch (month){
//         case 0:
//             formatedMonth = 'janeiro ';
//             break;
//         case 1:
//             formatedMonth = 'fevereiro ';
//             break;
//         case 2:
//             formatedMonth = 'março ';
//             break;
//         case 3:
//             formatedMonth = 'abril ';
//             break;
//         case 4:
//             formatedMonth = 'maio ';
//             break;
//         case 5:
//             formatedMonth = 'junho ';
//             break;
//         case 6:
//             formatedMonth = 'julho ';
//             break;
//         case 7:
//             formatedMonth = 'agosto ';
//             break;
//         case 8:
//             formatedMonth = 'setembro ';
//             break;
//         case 9:
//             formatedMonth = 'outubro ';
//             break;
//         case 10:
//             formatedMonth = 'novembro ';
//             break;
//         case 11:
//             formatedMonth = 'dezembro ';
//             break;
//         default:
//             formatedMonth= 'Erro, ';
//             break;}
//     formatedDate = formatedDayMonth + date.getDate() + ' de ' + formatedMonth + 'de ' + date.getFullYear() + '\n ' + date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0');
//     return formatedDate;
// }


const date = new Date();
console.log(date.toLocaleDateString('pt-Br', {dateStyle: 'full'}));

// const op = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };


const result = document.querySelector('.container h1');
//result.innerHTML = formatDate(date);
//result.innerHTML = date.toLocaleDateString('pt-Br', op);
result.innerHTML = date.toLocaleString('pt-Br', {dateStyle: 'full', timeStyle: 'short'});

//Dia 4 do desafio 7 days of code - Alura - 2023
//DASKOPFKINO

const minimo = 0;
const maximo = 10;
const numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
let acertou = false;

alert('Olá, tente adivinhar qual número eu estou pensando de 0 a 10. Você tem 3 tentativas');
   
let i = 0;
let tentativa;
while (i < 3){
    tentativa = prompt('Qual o seu palpite?');
    if (tentativa == numeroSecreto){
        acertou = true;
        break
    } else {
        alert(`Hmm, que pena, não era ${tentativa}.`);
    }
    i += 1;
}

if (acertou){
    alert(`Parabéns, você acertou! O número que eu estava pensando era ${numeroSecreto}`);
} else {
    alert(`Poxa, não foi dessa vez. O número que eu estava pensando era ${numeroSecreto}`);
}

//Dia 5 do desafio 7 days of code - Alura - 2023
//DASKOPFKINO

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

alert('Olá, para criar a sua lista de compras, siga as instruções de cada janela');

while (true){
    const continua = prompt ('Quer adicionar um novo item? 1 para SIM e 2 para NÃO.');
    if (continua == 2){
        break
    }
    const categoria = prompt('Qual categoria? [1] - Frutas, [2] - Laticínios, [3] - Congelados, [4] - Doces, [5] - Outros. (Responda apenas os números)');
    const item = prompt('Qual o nome do item');

    if (categoria == 1){
        frutas.push(item);
    } else if (categoria == 2){
        laticinios.push(item);
    } else if (categoria == 3){
        congelados.push(item);
    } else if (categoria == 4){
        doces.push(item);
    } else if (categoria == 5){
        outros.push(item);
    }
}

alert(`Sua lista de compras é: \n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Congelados: ${congelados} \n Doces: ${doces} \n Outros: ${outros}`);


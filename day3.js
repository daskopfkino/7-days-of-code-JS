//Dia 3 do desafio 7 days of code - Alura - 2023
//DASKOPFKINO

alert('Olá, responda essas perguntas sobre suas preferências na computação. Use 1 para primeira opção e 2 para segunda opção;');

function main(){
    let perg1 = prompt('Quer seguir na área de Front-End ou Back-End?');
    verificaArea(perg1);
    let perg3 = prompt('Você quer seguir se desenvolvendo na área escolhida ou se tornar Fullstack?');
    mensagemIncentivo(perg3);
    outrasTecnologias();
}

function verificaArea(area){
    while (true){
        if (area == 1){
            const perg2 = prompt('Quer aprender React ou Vue?');
            break
        } else if (area == 2){
            const perg2 = prompt('Quer aprender C# ou Java?');
            break
        } else {
            alert("Digite apenas 1 ou 2.");
            area = prompt('Quer seguir na área de Front-End ou Back-End?');
        }
    }
}

function mensagemIncentivo(decisao){
    while (true){
        if (decisao == 1){
            alert('Siga praticando e monte seu portifólio!');
            break
        } else if (decisao == 2){
            alert('O caminho pode parecer longo, mas compensa. Estude!');
            break
        } else {
            alert('Digite apenas 1 ou 2.');
            decisao = prompt('Você quer seguir se desenvolvendo na área escolhida ou se tornar Fullstack?');
        }
    }
}

function outrasTecnologias(){
    alert('Digite todas as tecnologias que tem vontade de aprender, uma de cada vez, para terminar digite "fim".');
    let perg4 = prompt('Qual outra tecnologia quer aprender?');

    while (true){
        if (perg4 == 'fim'){
            break
        }
        perg4 = prompt('e o que mais?');
    }
}

main()

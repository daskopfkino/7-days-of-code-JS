//Desafio Dia 2 - 7 Days of Code Alura 2023
//DASKOPFKINO

//variáveis 
let nome;
let idade;
let linguagem;
let resposta;

//perguntas feitas ao usuário
nome = prompt('Olá, qual o seu nome? ');
idade = prompt(`${nome}, qual a sua idade? `);
linguagem = prompt('Por fim, qual linguagem de programação você está estudando?');

//Mensagem
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

//nova pergunta
resposta = prompt(`Você está gostando de estudar ${linguagem}? (Digite 1 para SIM e 2 para NÃO) `);

while (true){ //repete a pergunta até que o usuário digite um comando válido
    if (resposta == 1){
        alert(`Muito bom! Continue estudando e você terá muito sucesso, ${nome}.`);
        break //para o loop
    } else if (resposta == 2) {
        alert(`Poxa, que pena ${nome}... Já pensou em estudar outra linguagem?`);
        break
    } else {
        alert(`Ops, acho que você não digitou um comando válido. Tente novamente, ${nome}.`);
        resposta = prompt(`Você está gostando de estudar ${linguagem}? (Digite 1 para SIM e 2 para NÃO) `);
    }
    
}

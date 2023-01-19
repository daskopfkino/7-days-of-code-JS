let lista = [1, '1', 10, '10', 30, '30']; //declara lista com elementos

for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) { //dois for possibilita que existam elementos iguais e do mesmo tipo
        let tipoElemento1 = typeof(lista[i]);
        let tipoElemento2 = typeof(lista[j]);
        if (lista[i] == lista[j]){ //ficaria melhor se fosse uma função
            console.log('Os elementos são iguais');
        } else {
            console.log('Os elementos são diferentes);
        }
        //imprime os elementos e o tipo de cada um no console para que eu verifique se realmente são iguais
        console.log(${lista[i]} é do tipo ${tipoElemento1} e ${lista[j]} é do tipo ${tipoElemento2}); 
    }
}

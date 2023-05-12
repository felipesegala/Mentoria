// Crie uma função que dado um array de numeros inteiros, retorne a quantidade de numeros pares e impares no formato de obj:

const parEimpra = (array) => {
    const obj = {
        pares: 0,
        impares: 0,
    }

    for (let index = 0; index < array.length; index += 1) {
        if (array[index] % 2 === 0) {
            obj.pares += 1;
        } else {
            obj.impares += 1;
        }
    }
    return obj;
}
// console.log(parEimpra([1,2,3,4,5,6,7,8,9]));


//array[index] = estou pegando array e passando por todo seus valores:
//se o numero for par, eu acesso o obj.pares(esse obj é a variavel criada no formato de objeto),(já o pares é a chave dentro do obj) e adiciono mais 1 nos pares;
// caso seja impar eu acesso obj.impares)que funciona da mesma forma do anterior, e adiciono nos impares:

// EXERCICIO 3
/*
Crie uma funçao que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
Considere que a string ending sempre será menor que a string word.
Dica use split.

VALOR DE TESTE: 'trybe' e 'be'
valor esperado no retorno da função: true
*/

function verificaFimPalavra(word, ending) {
    const resultado = word.split(ending) //preciso passar o parametro que quero cortar com split, split corta a string e retorna um array em 2 ou mais pedaços dependendo do tamanho da string:
    // Poss usar tbm no lugar de .split o .endsWith que não corta a palavra mais sim verifica se ela termina com o parametro passado nesse caso 'be', não sendo mais necessario o if:

    console.log(word.split(ending)); // me ajuda a ver o codigo funcionando:

    if (resultado[resultado.length - 1] === '') { // isso significa que eu estou pegando a variavel resultado e acessando a ultima posição do seu tamanho -1, (-1 pois me permite acessar a ultima posiçao do array mesmo sem saber seu tamanho), pq? pq o split está transformando a string em array, dessa forma eu posso acessar suas posições:
        return true;
    }
    return false;
}
// console.log(verificaFimPalavra('trybe', 'be'));
//word,  ending  

function verificaFimPalavra(word, ending) {
    const resultado = word.endsWith(ending);
    // Posso usar tbm no lugar de .split o .endsWith que não corta a palavra mais sim verifica se ela termina com o parametro passado nesse caso 'be', não sendo mais necessario o if:
    return resultado;
}
console.log(verificaFimPalavra('trybe', 'be'));
// Crie uma função que dado um array de numeros inteiros, retorne a quantidade de numeros pares e impares no formato de obj:

const parEimpra = (array) => {
    const obj = {
        pares: 0,
        impares: 0,
    }

    for(let index = 0; index < array.length; index += 1) {
        if(array[index] % 2 === 0){
            obj.pares += 1;
        }else {
            obj.impares += 1;
        }
    }
    return obj;
}
console.log(parEimpra([1,2,3,4,5,6,7,8,9]));


//array[index] = estou pegando array e passando por todo seus valores:
//se o numero for par, eu acesso o obj.pares(esse obj é a variavel criada no formato de objeto),(já o pares é a chave dentro do obj) e adiciono mais 1 nos pares;
// caso seja impar eu acesso obj.impares)que funciona da mesma forma do anterior, e adiciono nos impares:

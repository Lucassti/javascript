//Usando let para usar o global ao invés de bloco
let numero = 1
{
    let numero2 = 2
    console.log("Dentro = ", numero)
}
console.log("Fora =", numero);

//Usando let em bloco
let numero3 = 1
console.log("Fora = ", numero3);
{
    let numero4 = 2
    console.log("Dentro = ", numero4)
}

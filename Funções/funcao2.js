//Usando váriavel na função
const soma = function (a,b) {
    return a+b;
}
console.log(soma(30,20));

//Arrow de função na váriavel arrow= =>
const soma2 = (a,b) =>{
    console.log(a+b);
}
soma2(20,50);

//retorno implícito
const subtracao = (a,b) => a-b;

console.log(subtracao(15,15));

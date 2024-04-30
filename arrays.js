const valores = [7.7, 8.9, 6.3, 9.2]; //criação de array
console.log(valores);

valores[2] = 4; //alterando o valor alocado no 2 por 4
console.log(valores);

valores.push(3.7, 4.8); //adicionar conteúdo dentro do array
console.log(valores);

delete valores[2]; //deletar valores do array
console.log(valores);

console.log(typeof valores)

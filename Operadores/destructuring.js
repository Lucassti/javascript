let pessoa = {
    nome: "Lucas",
    idade: 22,
    endereco:{
        cep: 55018330,
        logradouro: "Rua Manoel Martins de Araújo",
        numero: 183
    }
}
//criando um destructuring com variável.
const {nome: n, idade: i} = pessoa

console.log(n, i);

//Criando destructuring sem variável pré definida
const {idade, nome} = pessoa
console.log(nome, idade);

//Criando destructuring com sub objeto
const {endereco:{cep, logradouro, numero}} = pessoa

console.log(cep, numero, logradouro);

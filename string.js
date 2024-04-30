const escola = "Olá, Mundo";

console.log(escola.charAt(3)); //Apenas vai pegar a string que está na alocação 3 contando apartir de 0.
console.log(escola.indexOf('a')); //Descobrir se a variavel tem a letra "a"
console.log(escola.charCodeAt(1)); //Aqui converte para o código ASCI
console.log(escola.substring(1)); //Escreve apenas do 1 pra frente.
console.log(escola.substring(2, 5)); //Escreve apartir do 2 até o 5.

console.log("Aluno " .concat(escola).concat("!")); //Adiciona strings junto com a váriavel.

console.log(escola.replace("O", "R")); //Substitui o "O" da váriavel por "R".
 
console.log("Ana, Maria, Joane".split(",")) //Transforma essas strings em array.

// exercício 05

// verifica se o número é par ou impar
let n = 3;
if (n % 2 === 0) {
    console.log('é par');
} else {
    console.log('é impar');  // é impar
}

// Função para verificar se um número é múltiplo de seis
// Entrada de um número inteiro
let numero = 24;
function verificarMultiploDeSeis(numero) {
    // Verificação do resto da divisão por 6
    if (numero % 6 === 0) {
        console.log(numero + ' é um múltiplo de 6.'); // 24 é um múltiplo de 6
    } else {
        console.log(numero + ' não é um múltiplo de 6.');
    }
}
// Chamada da função
verificarMultiploDeSeis(numero);


// Cálculo da décima potência de 2
const number = 2;
const potencia = 10;
const resultado = Math.pow(number, potencia);

console.log('A décima potência de 2 é:', resultado); // A décima potência de 2 é: 1024

// outra forma de fazer
let conta = number ** potencia;
console.log('A décima potência de 2 é:', conta); // A décima potência de 2 é: 1024

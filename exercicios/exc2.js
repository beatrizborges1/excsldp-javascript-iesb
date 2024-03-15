// exercício 02

const nome = 'Beatriz Alves';
const sobrenome = 'Borges';
const idade = 18;
var cpf = '71354793515';
let number;

const nomeCompleto = nome + ' ' + sobrenome;
console.log('Nome completo:', nomeCompleto);
console.log('Idade:', idade);
console.log('cpf:', cpf);

// converter variável string "cpf" em número
number = parseInt(cpf);
console.log(typeof number);

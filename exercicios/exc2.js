// exercício 02

const nome = 'Beatriz Alves';
const sobrenome = 'Borges';
const idade = 18;
var cpf = '71354793515';
let number;

const nomeCompleto = nome + ' ' + sobrenome;
console.log('Nome completo:', nomeCompleto); // Nome completo: Beatriz Alves Borges
console.log('Idade:', idade); // Idade: 18
console.log('cpf:', cpf); // cpf: 71354793515

// converter variável string "cpf" em número
number = parseInt(cpf);
console.log(typeof number); // number

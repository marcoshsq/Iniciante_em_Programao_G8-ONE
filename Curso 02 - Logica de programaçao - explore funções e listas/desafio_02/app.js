// Desafios

// 1. Criar uma função que exibe "Olá, mundo!" no console.

function imprimir(){
    console.log("Olá, mundo!")
};

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

let nome = prompt("Como se chama? ");
function comprimentar(nome){
    alert(`Olá, ${nome}!`)
};

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let num = prompt("Digite um número: ");

function multiplicador(numero) {
    return numero * 2;
}

let resultado = multiplicador(Number(num));
console.log("O dobro do número é:", resultado);


// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let num3 = prompt("Digite o último número: ");

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let resultado = media(Number(num1), Number(num2), Number(num3));
console.log("A média dos números é:", resultado);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

function maior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

// Convertendo para números antes de chamar a função
let resultado = maior(Number(num1), Number(num2));

console.log("O maior número é:", resultado);


// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

let num = prompt("Digite um número: ");

function quadrado(n) {
    return n * n;
}

// Convertendo para número antes de chamar a função
let resultado = quadrado(Number(num));

console.log("O quadrado do número é:", resultado);

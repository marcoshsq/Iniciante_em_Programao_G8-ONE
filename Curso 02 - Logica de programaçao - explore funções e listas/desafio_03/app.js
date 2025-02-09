// Desafios

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let peso = Number(prompt("Digite seu peso (kg): "));
let altura = Number(prompt("Digite sua altura (m): "));

console.log("Seu IMC é:", calcularIMC(peso, altura).toFixed(2));


// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = Number(prompt("Digite um número para calcular o fatorial: "));
console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);


// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 4.80;
    return valorEmDolar * cotacaoDolar;
}

let valorDolar = Number(prompt("Digite o valor em dólares: "));
console.log(`O valor em reais é: R$${converterDolarParaReal(valorDolar).toFixed(2)}`);


// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

let alturaSala = Number(prompt("Digite a altura da sala (m): "));
let larguraSala = Number(prompt("Digite a largura da sala (m): "));

calcularSalaRetangular(alturaSala, larguraSala);


// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)} m²`);
    console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

let raioSala = Number(prompt("Digite o raio da sala (m): "));

calcularSalaCircular(raioSala);


// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numeroTabuada = Number(prompt("Digite um número para ver sua tabuada: "));
mostrarTabuada(numeroTabuada);

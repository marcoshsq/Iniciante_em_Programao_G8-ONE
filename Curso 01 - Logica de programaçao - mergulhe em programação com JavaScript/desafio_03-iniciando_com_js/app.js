// Desafios

// 01. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

var contador = 1;
while (contador <= 10) {
    alert(contador);
    contador += 1;
}

// 02. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

var contador = 1;
while (contador <= 10) {
    alert(contador);
    contador += 1;
}

// 03. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

var contador = Number(prompt("Digite um número: "));
while (contador >= 0) {  // Garantimos que o 0 também seja mostrado.
    console.log(contador);
    contador -= 1;
}

// 04. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

var numero = Number(prompt("Digite um número: "));
var controle = 0;

while (controle <= numero) { // Alteramos a condição para incluir o número digitado.
    console.log(controle);
    controle += 1;
}

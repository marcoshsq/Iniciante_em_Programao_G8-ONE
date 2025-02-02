// Versão 1.2

alert('Boas-vindas ao jogo do número secreto!');

// Gera um número secreto aleatório entre 1 e 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;  
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = Number(prompt("Escolha um número entre 1 e 10: "));

    // Verifica se a entrada é válida
    if (isNaN(chute) || chute < 1 || chute > 10) {
        alert("Por favor, digite um número válido entre 1 e 10.");
        continue;  // Volta para o início do loop sem contar como tentativa
    }

    tentativas++;  // Incrementa o número de tentativas

    if (chute === numeroSecreto) {
        alert(`🎉 Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativa(s)!`);
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente!`);
    } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente!`);
    }
}

// Versão 2.0

alert('🎲 Boas-vindas ao jogo do número secreto!');

// Define o intervalo do jogo
let min = Number(prompt("Digite o menor número do intervalo:"));
let max = Number(prompt("Digite o maior número do intervalo:"));

// Garante que os valores inseridos são válidos
while (isNaN(min) || isNaN(max) || min >= max) {
    alert("⛔ Intervalo inválido! Digite dois números válidos, onde o primeiro seja menor que o segundo.");
    min = Number(prompt("Digite o menor número do intervalo:"));
    max = Number(prompt("Digite o maior número do intervalo:"));
}

// Gera um número secreto dentro do intervalo escolhido pelo jogador
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
let chute;
let tentativas = 0;

while (chute !== numeroSecreto) {
    chute = Number(prompt(`Adivinhe o número secreto entre ${min} e ${max}:`));

    // Verifica se o chute está dentro do intervalo
    if (isNaN(chute) || chute < min || chute > max) {
        alert(`⛔ Digite um número válido entre ${min} e ${max}.`);
        continue; // Volta para o início do loop sem contar como tentativa
    }

    tentativas++;

    // Usa operador ternário para simplificar as verificações
    alert(chute === numeroSecreto 
        ? `🎉 Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativa(s)!`
        : `📉 O número secreto é ${chute > numeroSecreto ? "menor" : "maior"} que ${chute}. Tente novamente!`);
}


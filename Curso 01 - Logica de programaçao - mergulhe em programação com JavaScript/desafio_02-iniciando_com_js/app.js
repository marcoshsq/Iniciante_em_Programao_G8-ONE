/* Desafios

1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!". */

let dia_semana = prompt("Que dia é hoje? ");

dia_semana = dia_semana.toLowerCase();

if(dia_semana === "sábado" || dia_semana=== "domingo") {
    alert("Bom fim de semana!")
} else {
    alert("Boa semana!")
};

/* 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando. */

let num = prompt("Digite um número: ");

if(num >= 0) {
    alert("O numero" + num + "é positivo!")
} else{
    alert("O número" + num + "é negativo!")
};

/* 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.". */

let pontuação = prompt("Qual foi a sua pontuação? ");
let premio = 100;

if(pontuação >= premio) {
    alert("Parabéns, você venceu!")
} else{"Não foi dessa vez... :(. Tente novamente para ganhar"};

/* 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo. */ 

let saldo = 100;
alert(`Seu saldo é ${saldo}`);

/* 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. */

let nome = prompt("Olá, como se chama? ")
alert(`Olá ${nome}, seja bem vindo!`)
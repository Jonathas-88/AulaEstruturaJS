// const numero = Number(prompt('digite um número'))

// if(numero % 2 === 0){
    // alert('é par')
// } else{
    // alert('é impar')
// }

// numero % 2 === 0 ? alert('é par') : alert('é impar')

// Bom-dia


// const turno = prompt('Digite manhã , tarde ou noite').toLowerCase()

// if(turno === 'manhã'){
    // alert('Bom dia!')
// } else if(turno === 'tarde') {
    // alert('Boa tarde!')
// }else{
    // alert('Boa noite!')
// }

//const opcao = prompt('Digite 1 para ver perfil, 2 para editar e 3 para sair')

// switch(opcao){
    // case'1':
        // alert('Você escolheu ver perfil')//bloco de construção
        // break
    // case'2':
        // alert('Você escolheu editar perfil')//bloco de construção
        // break
    // case'3':
        // alert('Você escolheu sair')//bloco de construção
        // break
    // default:
        // alert('escolha opção válida')
        // }


// let valorCompra = prompt('Digite o valor da compra').toLocaleUpperCase()
   
// let desconto = 0.1 //valor do desconto

// if (valorCompra > 100 ){
    // let valorFinal = valorCompra -(valorCompra*desconto)
    // alert('Parabens vc ganhou o desconto seu valor agora é R$' + valorFinal )
// }else{
    // alert('infelizmente vc não ganhou desconto')
// }

// let nota1 = Number(prompt('Digite sua nota 1'))
// let nota2 = Number(prompt('Digite sua nota 2'))
// let nota3 = Number(prompt('Digite sua nota 3'))

// let media = (nota1 + nota2 + nota3) / 3 

// if (media >= 7){
    //  alert('vc passou sua média é ' + media)
// }else{
    // alert('reprovado com media ' + media)
// }

//Crie um programa para verificar se a pessoa tem mais de 18 anos e possui habilitação, caso contrário, não poderá dirigir.

// let idade = Number(prompt('Digite sua idade'))
// let habilitação = prompt('você tem habilitação? (sim/nao)').toLowerCase()

// if (idade >= 18 && habilitação === "sim" ){
//    alert('vc pode dirigir')
// }else{
    // alert("não pode dirigir vá pra auto escola")
// }

//Utilize uma estrutura de condição para receber um número de 1 a 7 e exibir o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Inclua um caso default para números inválidos.

// let dia = Number(prompt('digite de número de 1 a 7'));
    
// switch (dia){
//     case 1:
//         alert('domingo')
//         break
//     case 2:
//         alert('segunda')
//         break
//     case 3:
//         alert('terça')
//     break
//     case 4:
//         alert('quarta')
//     break    
//     case 5:
//         alert('quinta')
//     break
//     case 6:
//         alert('sexta')
//     break
//     case 7:
//         alert('sábado')
//     break
//     default:
//         alert('número invalido ! ')
// }


// Um jogo classifica os jogadores com base em um número de 1 a 4. Faça uma construção de condição que exiba a classificação:

// - 1: "Iniciante"
// - 2: "Intermediário"
// - 3: "Avançado"
// - 4: "Mestre"
// - Qualquer outro número: "Nível inválido"


// let nivel = Number(prompt('Digite um número de 1 a 4'))

// if ( nivel === 1){
//     alert('iniciante')
// }else if (nivel === 2){
//     alert('intermediário')
// }else if (nivel === 3){
//     alert('Avançado')
// }else if (nivel === 4){
//     alert('Mestre')
// }else {
//     alert('nivel invalido')
// }
    

// Crie um programa que receba o nome de uma bebida ("suco", "refrigerante", "água", "café") e exiba uma mensagem diferente para cada uma. Se a bebida não estiver no cardápio, mostre "Opção indisponível".

// let bebida = prompt('escolha sua bebida: opções (suco, refrigerante, água ou café)')

// switch(bebida){
//     case 'suco':
//         alert('parabéns você escolheu um suco')
//     case 'refrigerante':
//         alert('parabéns você escolheu um refrigerante')
//     case 'água':
//         alert('parabéns você escolheu um água')
//     case 'café':
//         alert('parabéns você escolheu um café')
        
// }


//Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

// let valordacompra = Number(prompt("Digite o preço do produto: "));
// let corEtiqueta = prompt("Qual a cor da etiqueta? ").toLowerCase();

// while (corEtiqueta !== "verde" && corEtiqueta !== "amarelo" && corEtiqueta !== "azul" && corEtiqueta !== "vermelho") {
//     alert("Essa etiqueta não existe na loja! Digite uma cor válida (verde, amarelo, azul ou vermelho).");
//     corEtiqueta = prompt("Qual a cor da etiqueta? ").toLowerCase();
// }

// let desconto = 0;

// switch (corEtiqueta) {
//     case "verde":
//         desconto = 0.1;
//         break;
//     case "amarelo":
//         desconto = 0.2;
//         break;
//     case "azul":
//         desconto = 0.3;
//         break;
//     case "vermelho":
//         desconto = 0.4;
//         break;
// }

// let valorComDesconto = valordacompra - (valordacompra * desconto);
// alert(`Você ganhou ${desconto * 100}% de desconto, seu valor final é: R$${valorComDesconto.toFixed(2)}`); //toFixed(2) fixa duas casas decimais


//atividade 02: Crie um programa que peça ao usuário para digitar uma senha. 
// //Continue pedindo a senha até que o usuário digite "1234". 
// Use um laço do…while para controlar as tentativas e, 
// quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".

// let senha = "1234";
// let senhaDigitada;

// do {
//     senhaDigitada = prompt("Digite a senha: ");
// } while (senhaDigitada !== senha);

// alert("Acesso permitido!");

//Você precisa criar um programa que ajude a calcular a média de notas de uma turma. O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

// let QuantidadeAlunos = parseInt(prompt("Qual a quantidade de Alunos da Turma?"))
// let notas = 0

// for (let index = 0; index < QuantidadeAlunos; index++){
//   notas += parseFloat(prompt('Digite a nota'))
// }
// const media = notas/QuantidadeAlunos

// alert (`A média dos alunos é ${media}`)

// Você é responsável por calcular o total das vendas do dia para uma pequena loja. 
// Escreva um programa que peça ao usuário o valor de cada venda, uma por vez. 
// Use um laço de repetição para capturar esses valores e adicione-os a um total acumulado. O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar). Ao final, exiba o total de vendas do dia.

// let valorVenda = 0
// let totalAcumulado = 0

// do {
//     valorVenda = parseFloat(prompt("Digite o valor da venda ou 0 para sair"))
//     totalAcumulado += valorVenda
    
// } while (valorVenda !== 0);

// alert (${totalAcumulado})



    



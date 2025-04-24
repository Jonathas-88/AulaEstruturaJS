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


let nivel = Number(prompt('Digite um número de 1 a 4'))

if ( nivel === 1){
    alert('iniciante')
}else if (nivel === 2){
    alert('intermediário')
}else if (nivel === 3){
    alert('Avançado')
}else if (nivel === 4){
    alert('Mestre')
}else {
    alert('nivel invalido')
}
    

// Crie um programa que receba o nome de uma bebida ("suco", "refrigerante", "água", "café") e exiba uma mensagem diferente para cada uma. Se a bebida não estiver no cardápio, mostre "Opção indisponível".

let bebida = prompt('escolha sua bebida: opções (suco, refrigerante, água ou café)')

switch(bebida){
    case 'suco':
        alert('parabéns você escolheu um suco')
    case 'refrigerante':
        alert('parabéns você escolheu um refrigerante')
    case 'água':
        alert('parabéns você escolheu um água')
    case 'café':
        alert('parabéns você escolheu um café')
        
}
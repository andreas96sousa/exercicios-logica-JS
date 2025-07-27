let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const totalSlides = carousel.children.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }



function verifyIsPar(){
    let numero = Number(numExUm.value)

    if (numero%2==0){
        resultadoExUm.innerHTML = `O ${numero} é Par!`
    }else{
        resultadoExUm.innerHTML = `O ${numero} é Ímpar!`
        
    }
}
function verifyBigger(){
    let numero1 = Number(numExDois1.value)
    let numero2 = Number(numExDois2.value)
    
    if(numero1 > numero2){
        resultadoExDois.innerHTML = `O ${numero1} é maior que o ${numero2}!`
        
    } else if(numero2 > numero1){
        resultadoExDois.innerHTML = `O ${numero1} é menor que o ${numero2}!`
        
    } else {
        resultadoExDois.innerHTML = `O ${numero1} é igual ao ${numero2}!`
        
    }
}
function verifyIsPositive(){
    let numero = Number(numExTres.value)
    
    if(numero > 0){
        resultadoExTres.innerHTML = `O ${numero} é Positvo!`
        
    } else if(numero < 0){
        resultadoExTres.innerHTML = `O ${numero} é Negativo!`
        
    } else {
        resultadoExTres.innerHTML = `O ${numero} é 0!`
        
    }
}
function verifyIsDeMaior(){
    let idade = Number(numExQuatro.value)
    
    if(idade >= 18){
        resultadoExQuatro.innerHTML = `Você tem ${idade} anos, portanto pode tirar carteira de motorista!`
        
    } else {
        resultadoExQuatro.innerHTML = `Você tem ${idade} anos, portanto não pode tirar carteira de motorista!`
        
    }
    
}
function verifyIsWhosBigger(){
    let numero1 = Number(numExCinco1.value)
    let numero2 = Number(numExCinco2.value)
    let numero3 = Number(numExCinco3.value)
    
    if(numero1 > numero2 && numero1 > numero3){
        resultadoExCinco.innerHTML = `O ${numero1} é o maior dos três numeros!`
        
    } else if(numero2 > numero1 && numero2 > numero3){
        resultadoExCinco.innerHTML = `O ${numero2} é o maior dos três numeros!`
        
    } else if(numero3 > numero1 && numero3 > numero2){
        resultadoExCinco.innerHTML = `O ${numero3} é o maior dos três numeros!`
    } else {
        resultadoExCinco.innerHTML = `Alguns dos números digitados são iguais, impossivel determinar o maior entre eles!`
        
    }
    
}
 function verifyNota(){
    let nota = Number(numExSeis.value)

    if(nota > 10 || nota < 0){
        resultadoExSeis.innerHTML = `Nota digitada Inválida! <br> 
        Digite Novamente!`
    } else {
        
        if(nota < 5){
            resultadoExSeis.innerHTML = `Nota D`
            
        } else if(nota >= 5 && nota < 7){
            resultadoExSeis.innerHTML = `Nota C`

        } else if(nota >= 7 && nota < 9){
            resultadoExSeis.innerHTML = `Nota B`

        } else {
            resultadoExSeis.innerHTML = `Nota A`

        }
    }
}
 function verifyIsMult(){
    let numero = Number(numExSete.value)
    
    if(numero % 3 != 0 && numero % 5 != 0){
        resultadoExSete.innerHTML = `O ${numero} não é multiplo de nenhum!`

    } else if(numero % 3 == 0 && numero % 5 == 0) {
        resultadoExSete.innerHTML = `O ${numero} é multiplo de Ambos!`
        
    } else if(numero % 3 == 0 && numero % 5 != 0) {
        resultadoExSete.innerHTML = `O ${numero} é multiplo de 3!`
        
    } else if(numero % 3 != 0 && numero % 5 == 0) {
        resultadoExSete.innerHTML = `O ${numero} é multiplo de 5!`
        
    }
}
 function checkPass(){
    let pass = numExOito.value

    if(pass == 1234){
        resultadoExOito.innerHTML = `Acesso Permitido!`
        numExOito.value = ""
        
    } else {
        resultadoExOito.innerHTML = `Acesso Negado!`
        numExOito.value = ""
 
    }
}
 function calculator(){
    let numero1 = Number(numExNove1.value)
    let numero2 = Number(numExNove2.value)
    let op = opExNove.value

    console.log(op)
    if(op != "+" && op != "-" && op != "*" && op != "/"){
        resultadoExNove.innerHTML = `Operação Inválida, impossivel calcular!`
    } else {
        if(op == "+"){
            resultadoExNove.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${numero1+numero2}`
            
        } else if(op == "-"){
            resultadoExNove.innerHTML = `A subtração entre ${numero1} e ${numero2} é igual a ${numero1-numero2}`
            
        } else if(op == "*"){
            resultadoExNove.innerHTML = `A multiplicação entre ${numero1} e ${numero2} é igual a ${numero1*numero2}`
            
        } else {
            resultadoExNove.innerHTML = `A divisão entre ${numero1} e ${numero2} é igual a ${numero1/numero2}`

        }

    }
}
 function checkIfIsBi(){
    let ano = Number(numExDez.value)
    
    if(ano % 4 == 0){
        resultadoExDez.innerHTML = `O ano ${ano} é um ano Bissexto!`

    } else {
        resultadoExDez.innerHTML = `O ano ${ano} não é um ano Bissexto!`
        
    }
}
 function lorem(){
    loremExplica.innerHTML = `Um ano bissexto é um ano com 366 dias, em vez dos 365 dias de um ano comum. O dia extra, 29 de fevereiro, é adicionado para compensar a diferença entre o ano civil e o ano trópico, que é o tempo que a Terra leva para completar uma volta ao redor do Sol. <br>
    
    Por que existe o ano bissexto? <br>
    
    O ano trópico tem aproximadamente 365 dias e 6 horas. Se não adicionássemos um dia extra a cada quatro anos, o calendário acabaria ficando desfasado em relação às estações do ano, ou seja, o inverno, a primavera, o verão e o outono começariam a acontecer em datas diferentes do que estamos acostumados. <br> `
}
 function checkIfIsSame(){
    let nome1 = nomeExOnze1.value.toUpperCase()
    let nome2 = nomeExOnze2.value.toUpperCase()

    

    if(nome1 == nome2){
        resultadoExOnze.innerHTML = `Nomes Iguais!`
        
    } else {
        resultadoExOnze.innerHTML = `Nomes Diferentes!`

    }
}
 function checkTemp(){
    let temp = Number(numExDoze.value)

    if(temp < 15){
        resultadoExDoze.innerHTML = `Frio!`
        
    } else if(temp >= 15 && temp <=25){
        resultadoExDoze.innerHTML = `Agradável!`
        
    } else {
        resultadoExDoze.innerHTML = `Quente!`

    }
}
 function checkVote(){
    let idade = Number(numExTreze.value)

    if(idade < 16){
        resultadoExTreze.innerHTML = `Ainda não pode votar!`
        
    } else if (idade >=16 && idade < 18) {
        resultadoExTreze.innerHTML = `Voto opcional!`
        
    } else {
        resultadoExTreze.innerHTML = `Voto obrigatório!`

    }
}
 function checkNum(){
    let numero = Number(numExQuatorze.value)

    if(numero >= 10 && numero <= 100){
        resultadoExQuatorze.innerHTML = `O número ${numero} está entre 10 e 100!`

    } else {
        resultadoExQuatorze.innerHTML = `O número ${numero} não está entre 10 e 100!`

    }
}
 function checkParFifth(){
    let numero = Number(numExQuinze.value)
    
    if(numero % 2 == 0 && numero > 50){
        resultadoExQuinze.innerHTML = `O número ${numero} é par e é maior que 50!`
        
    } else {
        resultadoExQuinze.innerHTML = `O número ${numero} não é par ou não é maior que 50!`
        
    }
}
 function discounts(){
    let numero = Number(numExDezesseis.value)

    if(numero > 100){
        resultadoExDezesseis.innerHTML = `Desconto de 10%: ${numero*0.9} `
        
    } else if(numero >= 50 && numero <= 100) {
        resultadoExDezesseis.innerHTML = `Desconto de 5%: ${numero*0.95} `
        
    } else {
        resultadoExDezesseis.innerHTML = `Sem desconto: ${numero} `

    }
}
 function media(){
    let nota1 = Number(numExDezessete1.value)
    let nota2 = Number(numExDezessete2.value)
    let media = (nota1 + nota2) / 2

    if(media >= 7){
        resultadoExDezessete.innerHTML = `Média: ${media} <br> Aprovado!`

    } else {
        resultadoExDezessete.innerHTML = `Média: ${media} <br> Reprovado!`

    }
    
}
 function resposta(){
    let resposta = respostaExDezoito.value.toUpperCase()
    
    if(resposta == "SIM"){
        resultadoExDezoito.innerHTML = `Presença confirmada!
        `
    } else if (resposta == "NÃO" || resposta == "NAO") {
        resultadoExDezoito.innerHTML = `Presença não confirmada!
        `
    } else {
        resultadoExDezoito.innerHTML = `Respota inválida!
        `

    }
}
 function checkIMC(){
    let altura = Number(numExDezenove1.value)
    let peso = Number(numExDezenove2.value)
    let imc = peso/(altura**2)

    if( imc < 18.5){
        resultadoExDezenove.innerHTML = `Abaixo do Peso!`
        
    } else if (imc >= 18.5 && imc < 25) {
        resultadoExDezenove.innerHTML = `Peso Normal!`
        
    } else if (imc >= 25 && imc < 30) {
        resultadoExDezenove.innerHTML = `Sobrepeso!`
        
    } else {
        resultadoExDezenove.innerHTML = `Obesidade!`

    }
}
function checkIsSamePass(){
    let pass1 = numExVinte1.value
    let pass2 = numExVinte2.value

    if(pass1 == pass2){
        resultadoExVinte.innerHTML = `As senhas são iguais!`

    } else {
        resultadoExVinte.innerHTML = `As senhas não são iguais!`
        
    }
}
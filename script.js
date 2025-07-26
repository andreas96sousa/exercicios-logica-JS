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
/*function desafio_operadores(num1, num2){
    if(num1==num2){
        console.log("Os números " + num1 + " e " + num2 + " são iguais. ");
    }
    else{
        console.log("Os números " + num1 + " e " + num2 + " não são iguais. ");
    }
    var soma = num1+num2;
    if(soma>10){
        console.log()
        if(soma>20)
        {
            console.log("A soma dos números é " + soma + " que é maior que 10 e maior que 20.");
        }
        else{
            console.log("A soma dos números é" + soma + " que é maior que 10 e menor que 20.");
        }
    }
    else{
        console.log("A soma dos números é" + soma + " que é menor que 10 e menor que 20.");
    }
    
}*/

function comparaNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let SaoIguais = ' ';

    if(num1 !== num2)
    {
        SaoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${SaoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros(1,2));
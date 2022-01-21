function desafio_operadores(num1, num2){
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
    
}

desafio_operadores(3,3);
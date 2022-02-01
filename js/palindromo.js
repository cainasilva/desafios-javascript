//solucao 1
/*
function verificaPalindromo (string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));*/

//solucao 2
/*
function verificaPalindromo2 (string) {
    if(!string) return "string inexistente"

    for(let i=0; i<string.length/2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("ama"));*/

/*const meuObjeto = {
    chave: valor;
}

console.log(meuObjeto.chave);*/

/*const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething(animal);*/

const myObj = {
    num1: 2,
    num2: 4,

};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);

}

soma.call(myObj, 1, 5);
//1 - Crie uma função que receba um número de 1 a 100 e retorne apenas os números primos anteriores. Após realize o teste automatizado para essa função.


export function VerificaNumerosPrimos(numero) {
    if (numero > 100 || numero < 1) {
        throw new Error("Digite um numero entre 1 e 100")
    }
    if (numero < 2) return [];
    const primos = [];
    for (let num = 2; num < numero; num++) {
        let Primo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                Primo = false;
                break;
            }
        }
        if (Primo) {
            primos.push(num);
        }
    }
    return primos;
};

// 2 - Crie uma função que receba um número n de 1 a 100 e retorne o enésimo da sequência de Fibonacci número dessa sequência. Após realize o teste automatizado para essa função.

export function TesteFibonacci(n) {
    if (n > 100 || n < 1) {
        throw new Error("Digite um numero entre 1 e 100")
    }
    if (n <= 0) return "Entrada inválida";
    if (n === 1) return 0;
    if (n === 2) return 1;
    let a = 0, b = 1, temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}



// 3 - Crie uma função que receba um objeto e verifique se ela esse objeto possui todos os atributos necessários. Após, crie um teste que verifica o comportamento correto dessa função.
//(os atributos são: nome, idade, pais, endereço)

export const Pessoa = {
    nome: "Raquel",
    idade: 18,
    pais: "Brasil",
    endereco: "Moacir Andrade" 
}
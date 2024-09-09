import { VerificaNumerosPrimos, Pessoa, TesteFibonacci } from "./index";

test('Retorna os números primos menores que 100', () => {
    expect(VerificaNumerosPrimos(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
});

test('Retorna o 1º número da sequência de Fibonacci', () => {
    expect(TesteFibonacci(1)).toBe(0);
});

test('Verifica se o objeto possui todos os atibutos', () => {
    expect(Pessoa).toHaveProperty("nome", "idade", "pais", "endereco")
});
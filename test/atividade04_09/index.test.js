import { filtrarNumerosPares, ordemAlfabetica } from "./index";

test('filtra apenas os números pares de uma lista', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const resultadoEsperado = [2, 4, 6];
    expect(filtrarNumerosPares(numeros)).toEqual(resultadoEsperado);
});

test('ordena a lista em ordem alfabetica', () => {
    const listaOriginal = ["Raquel", "Duda", "Deyse"];
    const listaEsperada = ["Deyse", "Duda", "Raquel"];

    expect(ordemAlfabetica(listaOriginal)).toEqual(listaEsperada)
})
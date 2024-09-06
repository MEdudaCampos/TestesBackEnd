import { divisao, cursos, influencer, maxAlunos } from "./index";

//.toThrow verifica se retorna um error

test("Verifica se o segundo argumento é zero", () => {
    expect(() => divisao(10, 2).toThrow(Error))
    expect(() => divisao(10, 0)).toThrow("Não pode divisão por zero!")
})

//.toContain verifica se uma string tem a palavra esperada

test("Verifica se o curso de soldagem está ativo", () => {

    const fraseDoDia = "O sol está escaldante em Maceió"

    expect(cursos).toContain("Soldagem");
    expect(fraseDoDia).toContain("sol")

})

// Macther respponsável por verificar as propriedades de um objeto
test("Verificar se a propriedade triguinho existe no objeto influencer", () => {
    expect(influencer).toHaveProperty("triguinho")
    expect(influencer).not.toHaveProperty("BET")
    expect(influencer).toHaveProperty("endereco.cidade", "Recife")
})

//.toHaveProperty verifica se há uma propriedade no objeto | o not é para negar


// Macher verificar valor maior e menor
test("Verificar numero maximo e minimo", () => {
    expect(maxAlunos).toBeGreaterThan(25) //.toBeGreaterThan verifica que é maior
    expect(maxAlunos).toBeLessThan(40) //.toBeLessThan verifica que é menor
})
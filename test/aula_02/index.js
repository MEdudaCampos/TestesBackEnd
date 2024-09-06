export const divisao = (a, b) => {
    if (b === 0) {
        throw new Error("Não pode divisão por zero!")
    }
    return a / b
}
console.log(divisao(10, 2))

export const cursos = ["Eletrotécnica", "Informática para Internet", "Mecânica Automotiva", "Soldagem", "Torneiraria"]

export const influencer = {
    nome: "Doutora Deolane",
    idade: 36,
    endereco: {
        cidade: "Recife",
        estado: "Pernambuco",
    },
    enderecoProvisorio: "Colônio Penal Feminina Bom Pastor",
    seguidores: 20000000,
    triguinho: true
}

export const maxAlunos = 30;
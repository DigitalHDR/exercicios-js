const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio 1: todos os alunos são bolsista?
const seraQueTodoSaoBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(seraQueTodoSaoBolsistas))
// && vai ser verdadeiro apenas se os dois forem verdadeiro

//Desafio 2: algum aluno é bolsista?
const algumAlunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumAlunoBolsista))
// || vai ser verdadeiro caso um dos dois sejam verdadeiro
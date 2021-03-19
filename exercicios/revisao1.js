//template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, u, c, a, ...s] = 'lucas'
console.log(l, u, c, a, s)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)
//Arrow Function
//Arrow Function não tem nome é anonima sempre
//deve se atribuir a Arrow Function a uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log(null)
log('sou mais forte')

//operado rest ou spread
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
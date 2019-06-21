function Cinetica(massa, velocidade) {
    return parseFloat(massa * (velocidade*velocidade) / 2)
}
console.log(Cinetica(10, 5))

function Gravitacional(massa, gravidade, altura) {
    return parseFloat( massa*gravidade*altura)
}
console.log(Gravitacional(20, 10, 20))

function Elastica(constante, deformacao) {
    return parseFloat(constante * (deformacao*deformacao) / 2)
}
console.log(Elastica(4000, 0.2))


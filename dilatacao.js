function DilatacaoLinear(comprimento, coeficiente, temp1, temp2, temperatura) {
    
    temperatura = temp2 - temp1
    return parseFloat(comprimento * coeficiente * temperatura)
}
console.log(DilatacaoLinear(40, 0.000012, 10, 50))

function DilatacaoSuperficial(area, coeficiente, temp1, temp2, temperatura) {
    
    temperatura = temp2 - temp1
    return parseFloat(area * coeficiente * temperatura)
}
console.log(DilatacaoSuperficial(40, 0.000024, 10, 50))

function DilatacaoVolumetrica(volume, coeficiente, temp1, temp2, temperatura) {
    
    temperatura = temp2 - temp1
    return parseFloat(volume * coeficiente * temperatura)
}
console.log(DilatacaoVolumetrica(40, 0.000036, 10, 50))
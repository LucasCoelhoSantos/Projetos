function calculardesconto() {
    let preco = document.getElementById('preco')
    let desconto = document.getElementById('desconto')
    let res = document.getElementById('res')
    
    if (preco.value.length == 0) {
        window.alert('Por favor, insira um preço!')
    }
    else if (desconto.value.length == 0) {
        window.alert('Por favor, insira o desconto desejado!')
    }
    else {
        let p = Number(preco.value)
        let d = Number(desconto.value)
        let soma = p + d
        res.innerHTML = `A soma entre ${p} e ${d} é igual a ${soma}`
        window.alert('soma')
    }
}
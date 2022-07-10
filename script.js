let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

let botao = document.querySelector("button")
let precoPromocao = document.querySelector(".promocao")

botao.addEventListener("click", function() {
    if(precoPromocao.innerText == "") {
        precoPromocao.innerText = "Hoje apenas: 2100,00"
    } else {
        precoPromocao.innerText = ""
    }
})
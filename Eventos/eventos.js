//Mudando o estilo e o texto//
let mensagem1 = document.getElementById("mensagem1")
let botao1 = document.getElementById("botao1")
botao1.addEventListener("click", bemVindo)

function bemVindo(){
    mensagem1.textContent = "Seja bem-vindo aos meus estudos em JavaScript!"
    mensagem1.style.color = "yellow"
    botao1.style.background = "purple"
    botao1.style.color = "white"
    botao1.textContent = "Obrigado por mudar minha cor"
    botao1.style.height = "50px"
    botao1.style.width = "250px"
}

//Mudando a imagem//
let feliz = document.getElementById("feliz")
let mensagem2 = document.getElementById("mensagem2")
feliz.addEventListener("mouseout", saindoFoto)
feliz.addEventListener("mouseenter", entrandoFoto)

function saindoFoto(){
    feliz.src = "img/triste.png"
    mensagem2.textContent = "Isso parece magia negra"
}

function entrandoFoto(){
    feliz.src = "img/feliz.png" 
    mensagem2.textContent = "Passe o mouse para mudar a imagem:"
}

//PreventDefault (cancela o comportamento padrao de um evento)//
document.getElementById("formulario1").addEventListener('submit', function(event){
    event.preventDefault();
    alert("Enviado com sucesso!")
})
const avanca = document.querySelectorAll('.btn-proximo') //pegando todos os botoes com a classe btn-proximo

avanca.forEach(button => {  //forEach - adicione pra cada botao algo que espera o usuario dar o click

    button.addEventListener('click', function(){ //adicionando ouvinte
        const atual = document.querySelector('.ativo')  //pegando o atual bloco
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo') //pegando o proximo passo, proximo bloco

        atual.classList.remove('ativo') //remover a classe de ativo
        document.getElementById(proximoPasso).classList.add('ativo') //adicionar a classe de ativo no proximo passo
    })
    
}) 
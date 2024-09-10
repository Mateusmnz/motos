function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    console.log (campoPesquisa)
    

// se a resposta for uma string sem nada entao não retorna dado
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
        campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let resultado = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
// Se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
         // Cria um novo item de resultado formatado em HTML
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://www.instagram.com/triumphbr/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informacoes</a> </br>
                <a href="${dado.review}" target="_blank">Review Completo</a>
            </div>
        `;}
       
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
// Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
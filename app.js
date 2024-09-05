console.log(dados);

// Resgatando o button de pesquisa e adicionando eventlistener para cada 'click' executar a função de filtro de pesquisa
const btnPesquisar = document.querySelector("#btnPesquisar");
btnPesquisar.addEventListener('click', filterBarraDePesquisa);

function filterBarraDePesquisa() {
    
    //  Resgatando input de pesquisa, já me retornando o valor tudo minúsculo
    const inputPesquisa = document.querySelector("#barraPesquisa").value.toLowerCase();
    
    // Filtrando os dados a partir do método filter que retornará apenas os artistas de acordo com a pesquisa 
    const resultadoPesquisa = dados.filter(artista => {
        return artista.titulo.toLowerCase().includes(inputPesquisa);
    })
    // Chama função que renderiza os artistas
    renderizaLista(resultadoPesquisa);
}

function renderizaLista(resultados) {
    
    // Resgatando o elemento section do html
    const section = document.querySelector(".resultados-pesquisa");
    
    // Esvaziando o elemento section para que não ocorra sobreposição de pesquisas diferentes
    section.innerHTML = ""
    
    // Iterando sobre cada artista dentro da lista de resultados da pesquisa 
    resultados.forEach((artista)=> {
        
        // Criando elemento article 
        let article = document.createElement("article");

        // Adicionando os elementos e informações de cada artista
        article.innerHTML = `
        <div class="principais-informacoes">
            <img src="${artista.img}" alt="Foto da(o) ${artista.titulo}">
            <div>
                <h2>${artista.titulo}</h2>
                <h3>Idade: <small>${artista.idade} anos</small></h3>
                <h3>Principais Álbuns:</h3>
                <ul>
                    <li><a href="">${artista.albuns[0]}</a></li>
                    <li><a href="">${artista.albuns[1]}</a></li>
                    <li><a href="">${artista.albuns[2]}</a></li>
                </ul>    
            </div>
        </div>
        <p class="descricao-meta">${artista.desc} <a href="${artista.href}" target="_blank">Saiba mais</a></p>
        `

        // Adicionando classe na tag article
        article.classList.add("item-resultado")

        // Inserindo elemento article previamente criado dentro da section
        section.appendChild(article);
    })
}

console.log(dados);

const btnPesquisar = document.querySelector("#btnPesquisar");
btnPesquisar.addEventListener('click', filterBarraDePesquisa);

function filterBarraDePesquisa() {
    const inputPesquisa = document.querySelector("#barraPesquisa").value.toLowerCase();
    console.log(inputPesquisa);
    const resultadoPesquisa = dados.filter(artista => {
        return artista.titulo.toLowerCase().includes(inputPesquisa) ||
        artista.albuns.join(' ').toLowerCase().includes(inputPesquisa) ||
        artista.desc.toLowerCase().includes(inputPesquisa);
    })
    renderizaLista(resultadoPesquisa);
}

function renderizaLista(resultados) {
    resultados.forEach((artista)=> {
        const section = document.querySelector(".resultados-pesquisa");
        section.innerHTML = ""

        let article = document.createElement("article");
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
        article.classList.add("item-resultado")
        section.appendChild(article);
    })
}

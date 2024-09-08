function pesquisar() {
    // Função responsável por realizar uma pesquisa em um conjunto de países (paísesG20)
    // com base no termo inserido pelo usuário no campo de pesquisa.

    // Obtém a referência para a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa inserido pelo usuário.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa) {
        // Se o campo estiver vazio, exibe uma mensagem de erro na seção de resultados.
        section.innerHTML = "O campo não pode estar vazio";
        // Interrompe a execução da função.
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Itera sobre cada país no array paisesG20.
    for (let pais of paisesG20) {
        // Verifica se o nome do país contém o termo pesquisado (ignorando maiúsculas e minúsculas).
        if (pais.nomePais.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            // Se o país for encontrado, cria um elemento HTML para exibir o resultado.
            // O resultado inclui o nome do país e sua descrição.
            resultados += `
                <div class ="item-resultado">
                    <h4>
                        <p class="descricao-meta">${pais.nomePais}</p>
                    </h4>
                    <p class="descricao-meta">${pais.descricao}</p>
                </div>`;
        }
    }

    // Verifica se foram encontrados resultados.
    if (!resultados) {
        // Se não houver resultados, exibe uma mensagem informando que a busca não encontrou nada.
        resultados = "<p>Busca não encontrou resultados</p>";
    }

    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa.
    section.innerHTML = resultados;
}

function conceito() {
    // Função responsável por exibir o conceito relacionado à pesquisa.
    // Assume que a variável global `def` contém os dados do conceito (título e descrição).

    // Obtém a referência para a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Cria uma string de HTML para representar o resultado da pesquisa.
    // Utiliza template literals para inserir o título e a descrição do conceito.
    section.innerHTML = `
        <div class ="item-resultado">
            <h4>
                <p class="descricao-meta">${def.titulo}</p>
            </h4>
            <p class="dependências">${def.descripcao}</p>
        </div>`;

    // Imprime a descrição do conceito no console para fins de depuração.
    console.log(def.descripcao);
}

function temas() {
    // Função responsável por exibir os temas relacionados à pesquisa.
    // Assume que a variável global `tem` contém os dados do tema (título e descrição).

    // Obtém a referência para a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Cria uma string de HTML para representar o resultado da pesquisa.
    // Utiliza template literals para inserir o título e a descrição do tema.
    section.innerHTML = `
        <div class ="item-resultado">
            <h4>
                <p class="descricao-meta">${tem.titulo}</p>
            </h4>
            <p class="descricao-meta">${tem.descripcao}</p>
        </div>`;

    // **Erro:** Imprime a descrição da variável `def`, que não está relacionada à função `temas()`.
    // Deveria imprimir a descrição do tema: `console.log(tem.descripcao)`;
    console.log(def.descripcao);
}

function lista() {
    // Função responsável por exibir uma lista relacionada à pesquisa.
    // Assume que a variável global `nacoes` contém os dados da lista (título e descrição).

    // Obtém a referência para a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Cria uma string de HTML para representar o item da lista.
    // Utiliza template literals para inserir o título e a descrição da lista.
    section.innerHTML = `
        <div class ="item-resultado">
            <h4>
                <p class="descricao-meta">${nacoes.titulo}</p>
            </h4>
            <p class="descricao-meta">${nacoes.descripcao}</p>
        </div>`;

    // **Erro:** Imprime a descrição da variável `def`, que não está relacionada à função `lista()`.
    // Deveria imprimir a descrição da lista: `console.log(nacoes.descripcao)`;
    console.log(def.descripcao);
}

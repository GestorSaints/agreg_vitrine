fetch('produtos.json')
    .then(resposta =>resposta.json())
    .then(produtos => {

const container = document.getElementById("produtos");

produtos.forEach(produto => {
    container.innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}" width="100%">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
        </div>
    `;
 });

});
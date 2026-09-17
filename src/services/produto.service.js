const Produto = require("../models/produto.model");

const produtos = [
    new Produto(1, "Notebook", 3500),
    new Produto(2, "Mouse", 120)
];

function listar() {
    return produtos;
}

function buscarPorId(id) {
    return produtos.find(produto => produto.id === Number(id));
}

function criar(dados) {
    if (!dados.nome || dados.preco == null) {
        throw new Error("nome e preco são obrigatórios");
    }

    const novoId = produtos.length + 1;

    const produto = new Produto(
        novoId,
        dados.nome,
        dados.preco
    );

    produtos.push(produto);

    return produto;
}

module.exports = {
    listar,
    buscarPorId,
    criar
};
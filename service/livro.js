import fs from 'fs';

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroById(id) {
    
    const livros = getTodosLivros();
    const livro = livros.find((livro) => livro.id == id);
    return livro;
}

function postNovoLivro(livro) {
    const livros = getTodosLivros();
    livros.push(livro);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function deleteLivroById(id) {
    const livros = getTodosLivros();
    const livro = livros.find( (livro) => livro.id == id );
    const index = livros.indexOf(livro);
    livros.splice(index, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function patchLivroById(id, livro) {
    const livros = getTodosLivros();
    const index = livros.findIndex((livroExistente) => livroExistente.id == id);

    if (index !== -1) {
        livros[index] = { ...livros[index], ...livro };
        fs.writeFileSync("livros.json", JSON.stringify(livros));
    } else {
        throw new Error('Livro not found');
    }
}

export { getTodosLivros, getLivroById, postNovoLivro, deleteLivroById, patchLivroById };
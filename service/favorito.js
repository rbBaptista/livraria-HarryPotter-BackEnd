import fs from 'fs';
import { getTodosLivros } from './livro.js';

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function getFavoritoById(id) {

    const favoritos = getTodosFavoritos();
    const favorito = favoritos.find((favorito) => favorito.id == id);
    return favorito;
}

function postNovoFavoritoById(id) {
    const livros = getTodosLivros();
    const favoritos = getTodosFavoritos();
    const livro = livros.find((livro) => livro.id == id);
    favoritos.push(livro);
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritos));
}

function deleteFavoritoById(id) {
    const favoritos = getTodosFavoritos();
    const favorito = favoritos.find((favorito) => favorito.id == id);
    const index = favoritos.indexOf(favorito);
    favoritos.splice(index, 1);
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritos));
}

export { getTodosFavoritos, getFavoritoById, postNovoFavoritoById, deleteFavoritoById };

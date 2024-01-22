import { getTodosFavoritos, deleteFavoritoById, postNovoFavoritoById } from "../service/favorito.js";

function postFavorito(req, res) {
  try {
    const id = req.body.id;
    postNovoFavoritoById(id);
    res.status(201).send("Livro adicionado com sucesso!");
  }
  catch (err) {
    res.status(500).send(err.message);
  }
}

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;
    deleteFavoritoById(id);
    res.send("Livro excluído com sucesso!");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export { getFavoritos, postFavorito, deleteFavorito };
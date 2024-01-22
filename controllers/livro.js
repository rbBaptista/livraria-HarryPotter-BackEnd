import { getTodosLivros, getLivroById, postNovoLivro, deleteLivroById, patchLivroById } from "../service/livro.js";

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroById(id);
      res.send(livro);
    } else {
      res.status(400).send("ID inválido");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
}

function postLivro(req, res) {
  try {
    const livro = req.body;
    
    if (Object.keys(livro.livro).length === 0) {
      res.status(400).send("O corpo da requisição está vazio");
    } else {
      postNovoLivro(livro);
      res.status(201).send("Livro adicionado com sucesso!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

function getLivros(req, res) {
  try {
      const livros = getTodosLivros();
      res.send(livros);
    } catch (err) {
      res.status(500).send(err.message);
    }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    deleteLivroById(id);
    res.send("Livro excluído com sucesso!");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = req.body;
    console.log(livro);
    console.log(id);
    patchLivroById(id, livro);
    res.send("Livro atualizado com sucesso!");
  } catch (err) {
    res.status(500).send(err.message);
  }
}
  
export { getLivros, getLivro, postLivro, deleteLivro, patchLivro };
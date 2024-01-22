import { getTodosLancamentos } from "../service/lancamentos.js";

function getLancamentos(req, res) {
    try {
        const livros = getTodosLancamentos();
        res.send(livros);
      } catch (err) {
        res.status(500).send(err.message);
      }
}
  
export { getLancamentos };
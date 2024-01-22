import express from 'express';
import rotaLivro from './routers/livro.js';
import rotaFavorito from './routers/favorito.js';
import rotaLancamento from './routers/lancamento.js';
import cors from 'cors';
// import connectDB from './database/db.js';

const app = express();
const port = 8000;

// connectDB();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.get("/", (req, res) => {res.send("Pagina Inicial!")});

app.use("/livros", rotaLivro);
app.use("/favoritos", rotaFavorito);
app.use("/lancamentos", rotaLancamento);
app.use("/img", express.static("img"));

app.listen(port, () => {
  console.log(`Server ON! Listening at http://localhost:${port}`);
});

// criar uma msg para o servidor for desligado
process.on('SIGINT', () => {
  console.log('Bye bye! Server going down');
  process.exit();
});
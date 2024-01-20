import express from "express";
import connection from "../infra/connection.js";

const app = express();
app.use(express.json()); // agora minha aplicação está pronta para receber arquivos JSON

// Função auxiliar para buscar um time por id
const getTimeById = (id) => times.find((time) => time.id === id);

// Função auxiliar para pegar o INDEX
const getTimeByIndex = (id) => times.findIndex((time) => time.id === id);

// Retornado dados para o cliente usando GET
app.get("/times-serie-a", (req, res) => {
  // res.send("Todos os times"); //posso enviar um texto simples
  // res.status(200).send(times); //enviando um json

  // Fazer um consulta no banco de dados
  const sql = "SELECT * FROM db_brasileirao_a.tb_times";
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ error: "Erro ao buscar os times" });
      throw error;
    }
    console.log(result);
    res.status(200).json(result);
  });
});

// Buscar time por ID
// usando o : estou criando um parâmetro para a rota
app.get("/times-serie-a/:id", (req, res) => {
  // forma de pegar o parâmetro da requisição -> req.params.id
  const id = req.params.id;
  const sql = `SELECT * FROM tb_times WHERE id = ?`; //posso usar tamplate string se quiser

  connection.query(sql, id, (error, result) => {
    //resulte retorna um array
    const time = result[0];

    if (error) {
      res
        .status(404)
        .json({ error: `time com id ${req.params.id} não encontrado` });
      throw error;
    }

    res.status(200).json(time);
  });
});

// rota para criar novos elementos usando POST
app.post("/times-serie-a", (req, res) => {
  const time = req.body;
  const sql = "INSERT INTO tb_times SET ?";
  connection.query(sql, time, (error, result) => {
    if (error) {
      res.status(400).json({ error: `Erro ao criar o time` });
      throw error;
    }
    console.log(result);
    res.status(201).send("Time criado com sucesso");
  });
});

// rota para deletar um elemento
app.delete("/times-serie-a/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM tb_times WHERE id = ?`;

  connection.query(sql, id, (error, result) => {
    const time = result;

    if (error) {
      res
        .status(404)
        .json({ error: `time com id ${req.params.id} não encontrado` });
      throw error;
    }

    res.status(200).json({ message: "Time deletado com sucesso" });
  });
});

// rota de atualização
app.put("/times-serie-a/:id", (req, res) => {
  const time = req.body;
  const id = req.params.id;

  const sql = "UPDATE tb_times SET ? WHERE id=?";
  connection.query(sql, [time, id], (error, result) => {
    if (error) {
      res.status(400).json({ error: `Erro ao atualizar o time` });
      throw error;
    }
    res.status(200).json({ message: "Time atualizado com sucesso" });
  });
});

export default app;

import express from "express";

const app = express();
app.use(express.json()); // agora minha aplicação está pronta para receber arquivos JSON

// mock de dados
const times = [
  { id: 1, name: "Flamengo" },
  { id: 2, name: "Palmeiras" },
  { id: 3, name: "São Paulo" },
  { id: 4, name: "Vasco" },
  { id: 5, name: "Cruzeiro" },
];

// Função auxiliar para buscar um time por id
const getTimeById = (id) => times.find((time) => time.id === id);

// Função auxiliar para pegar o INDEX
const getTimeByIndex = (id) => times.findIndex((time) => time.id === id);

// Rota padrão
app.get("/", (req, res) => {
  // Enviar resposta para o cliente
  res.send("Olá mundo");
});

// Retornado dados para o cliente usando GET
app.get("/times-serie-a", (req, res) => {
  // res.send("Todos os times"); //posso enviar um texto simples
  res.status(200).send(times); //enviando um json
});

// Buscar time por ID
// usando o : estou criando um parâmetro para a rota
app.get("/times-serie-a/:id", (req, res) => {
  // forma de pegar o parâmetro da requisição -> req.params.id
  const time = getTimeById(Number(req.params.id));
  res.status(200).json(time); //Resposta JSON
});

// rota para criar novos elementos usando POST
app.post("/times-serie-a", (req, res) => {
  if (!req.body.id) {
    res.status(404).send("Erro");
    return;
  }

  times.push(req.body);
  res.status(201).send("Time criado com sucesso");
});

// rota para deletar um elemento
app.delete("/times-serie-a/:id", (req, res) => {
  if (!req.params.id) {
    res.status(404).json({ error: "Precisa do ID para deletar" });
    return;
  }
  times.splice(getTimeByIndex(Number(req.params.id)), 1);
  res.status(200).json({ message: "Time deletado com sucesso" });
});

// rota de atualização
app.put("/times-serie-a/:id", (req, res) => {
  if (!req.params.id) {
    res.status(404).json({ error: "Precisa do ID para deletar" });
    return;
  }

  const index = getTimeByIndex(Number(req.params.id));
  times[index].name = req.body.name;

  res.status(200).json({ message: "Time atualizado com sucesso" });
});

export default app;

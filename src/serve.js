// Separando as responsabilidades
// Esse pasta fica em criar o servidor
import app from "./app.js";

const PORT = process.env.PORT || 8000;

// Escutar a porta
app.listen(PORT, () => {
  console.log(`O servidor rodando http://localhost:${PORT}`);
});

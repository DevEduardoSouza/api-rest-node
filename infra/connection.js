import mysql from "mysql2";

// criando a conexão
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_brasileirao_a",
  port: "3306",
  multipleStatements: true, // Adicione esta linha
});

connection.connect();

export default connection;

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

/**
 * Executa uma função sql com o sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string | [time , id]} valores
 * @param {string} msgReject
 * @returns Objeto da promise
 */
export const consulta = (sql, valores = "", msgReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, valores, (error, result) => {
      if (error) return reject(msgReject);

      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
};
export default connection;

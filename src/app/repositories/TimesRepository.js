import connection from "../database/connection.js";
class TimesRepository {
  create(time) {
    const sql = "INSERT INTO tb_times SET ?";
    return new Promise((resolve, reject) => {
      connection.query(sql, time, (error, result) => {
        if (error) return reject("Não foi possível criar o time");

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM db_brasileirao_a.tb_times";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject("Não foi possível localizar");

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = `SELECT * FROM tb_times WHERE id = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject("Time com id não encontrado");

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  update(time, id) {
    const sql = "UPDATE tb_times SET ? WHERE id=?";
    return new Promise((resolve, reject) => {
      connection.query(sql, [time, id], (error, result) => {
        if (error) return reject("Erro ao atualizar o time");

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = `DELETE FROM tb_times WHERE id = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject("Time com id não removido");

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
}

export default new TimesRepository();

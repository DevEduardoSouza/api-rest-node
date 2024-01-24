import { consulta } from "../database/connection.js";

class TimesRepository {
  create(time) {
    const sql = "INSERT INTO tb_times SET ?";
    return consulta(sql, time, "Erro ao cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM db_brasileirao_a.tb_times";
    return consulta(sql, "Erro ao buscar");
  }

  findById(id) {
    const sql = `SELECT * FROM tb_times WHERE id = ?`;
    return consulta(sql, id, "Erro ao buscar");
  }

  update(time, id) {
    const sql = "UPDATE tb_times SET ? WHERE id=?";
    return consulta(sql, [time, id], "Erro ao atualizar");
  }

  delete(id) {
    const sql = `DELETE FROM tb_times WHERE id = ?`;
    return consulta(sql, id, "Erro ao deletar");
  }
}

export default new TimesRepository();

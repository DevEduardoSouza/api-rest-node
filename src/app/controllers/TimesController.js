import TimesRepository from "../repositories/TimesRepository.js";

class TimesController {
  async getAll(req, res) {
    const result = await TimesRepository.findAll();
    res.json(result);
  }

  async getById(req, res) {
    const result = await TimesRepository.findById(req.params.id);
    res.json(result);
  }

  async create(req, res) {
    const result = await TimesRepository.create(req.body);
    res.json(result);
  }

  async update(req, res) {
    const time = req.body;
    const id = req.params.id;
    const result = await TimesRepository.update(time, id);
    res.json(result);
  }

  async delete(req, res) {
    const id = req.params.id;
    const result = await TimesRepository.delete(id);
    res.json(result);
  }
}

// Usando uma única instancia na aplicação toda
export default new TimesController();

import { Router } from "express";
import TimesController from "../controllers/TimesController.js";

const routes = Router();

routes.get("/times-serie-a", TimesController.getAll);
routes.get("/times-serie-a/:id", TimesController.getById);
routes.post("/times-serie-a", TimesController.create);
routes.delete("/times-serie-a/:id", TimesController.delete);
routes.put("/times-serie-a/:id", TimesController.update);

export default routes;

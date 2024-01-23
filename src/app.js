import express from "express";
import TimesController from "./app/controllers/TimesController.js";

const app = express();
app.use(express.json());

app.get("/times-serie-a", TimesController.getAll);
app.get("/times-serie-a/:id", TimesController.getById);
app.post("/times-serie-a", TimesController.create);
app.delete("/times-serie-a/:id", TimesController.delete);
app.put("/times-serie-a/:id", TimesController.update);

export default app;

import express from "express";
import routes from "./app/routes/routes.js";

const app = express();

app.use(routes);

app.use(express.json());

export default app;

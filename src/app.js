import express, { json } from "express";

const app = express();

//routes
import indexRoutes from "./routes/index.routes";
import taskRoutes from "./routes/task.routes";

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(json());

//routes app
app.use("/", indexRoutes);
app.use("/tasks", taskRoutes);

export default app;

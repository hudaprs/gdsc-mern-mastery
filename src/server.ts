// Express
import express from "express";

// Database
import { startDatabase } from "./database/mongo.database";

// Controllers
import { todoController } from "./controllers/todo.controller";

// Cors
import cors from "cors";

const startApp = async () => {
  try {
    await startDatabase();

    const PORT = 8000 || process.env.PORT;

    // Init app
    const app = express();

    // Init CORS, in order app can be accessed
    app.use(cors());

    // Register middleware to accept all http request
    app.use(express.json());

    // Register routes
    app.get("/api/todos", todoController.index);
    app.post("/api/todos", todoController.store);
    app.patch("/api/todos/:id", todoController.update);

    // Run the app
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (_) {
    //
  }
};

startApp();

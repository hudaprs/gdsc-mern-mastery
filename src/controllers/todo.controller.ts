// Express
import type { Request, Response } from "express";

// Models
import { Todo } from "../models/todo.model";

class TodoController {
  /**
   * @description Get todo list
   *
   * @param {Request} req
   * @param {Response} res
   *
   * @return {Promise<any>} Promise<any>
   */
  index = async (req: Request, res: Response) => {
    try {
      const todoList = await Todo.find();

      return res.status(200).json(todoList);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }

      return res
        .status(500)
        .json({ message: "Something went wrong form server" });
    }
  };

  /**
   * @description Create new todo
   *
   * @param {Request} req
   * @param {Response} res
   *
   * @return {Promise<any>} Promise<any>
   */
  store = async (req: Request, res: Response) => {
    try {
      const { title, completed } = req.body;

      // Simple validation
      if ([undefined, "", null].includes(title)) {
        return res.status(422).json({ message: "Title is required" });
      }

      const todo = new Todo({
        title,
        completed,
      });
      const newTodo = await todo.save();

      return res.status(201).json(newTodo);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }

      return res
        .status(500)
        .json({ message: "Something went wrong form server" });
    }
  };

  /**
   * @description Update existing todo
   *
   * @param {Request} req
   * @param {Response} res
   *
   * @return {Promise<any>} Promise<any>
   */
  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;

      // Simple validation
      if ([undefined, "", null].includes(title)) {
        return res.status(422).json({ message: "Title is required" });
      }

      const todoDetail = await Todo.findById(id);
      if (!todoDetail)
        return res.status(404).json({ message: "Todo not found" });

      todoDetail.set({
        title,
        completed,
      });

      const updatedTodo = await todoDetail.save();

      return res.status(200).json(updatedTodo);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
      }

      return res
        .status(500)
        .json({ message: "Something went wrong form server" });
    }
  };
}

const todoController = new TodoController();

export { todoController };

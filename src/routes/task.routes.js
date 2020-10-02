import { Router } from "express";
const router = Router();

import {
  createTask,
  deleteTask,
  editTask,
  getTask,
  getTasks,
} from "../controllers/tasks.controllers";
//all tasks
router.get("/", getTasks);
//create tasks
router.post("/", createTask);
//get tasks by id
router.get("/:id", getTask);
//delete task
router.delete("/:id", deleteTask);
//edit task
router.put("/:id", editTask);
export default router;

import e, { Router } from "express";
import { createTask, getTasks, getUserTasks, updateTaskStatus } from "../controller/taskController";

const router = Router();
router.get("/", getTasks);
router.post("/",createTask);
router.patch("/:taskId/status",updateTaskStatus);
router.get("/user/:userId", getUserTasks);

export default router;
import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getTasks = async (req: Request, res: Response) => {
    const {projectId}=req.query;
    try {
        const tasks=await prisma.task.findMany({
            where:{
                projectId:Number(projectId),
            },
            include:{
                author:true,
                assignee:true,
                comments:true,
                attachments:true,
            }
        });
        res.json(tasks);
    } catch (error:any) {
        res.status(500).json({error: `Error retrieving tasks ${error.message}`});
    }
}
export const createTask = async (req: Request, res: Response) => {
    const {title,description,status,priority,tags,startDate,dueDate,points,projectId,authorUserId,assignedUserId} = req.body;
    try {
        const task = await prisma.task.create({
            data: {
                title,description,status,priority,tags,startDate,dueDate,points,projectId,authorUserId,assignedUserId
            }
        });
        res.status(201).json(task);
    } catch (error: any) {
        res.status(500).json({error: `error creating task ${error.message}`});
    }
}
export const updateTaskStatus = async (req: Request, res: Response) => {
    const {taskId}=req.params;
    const {status}=req.body;
    try {
        const updatedTask=await prisma.task.update({
            where:{
               id:Number(taskId),
            },
            data:{
                status,
            }
            // include:{
            //     author:true,
            //     assignee:true,
            //     comments:true,
            //     attachments:true,
            // }
        });
        res.json(updatedTask);
    } catch (error:any) {
        res.status(500).json({error: `Error updating task ${error.message}`});
    }
}
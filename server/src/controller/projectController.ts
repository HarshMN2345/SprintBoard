import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await prisma.project.findMany();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({error: "Error retrieving projects"});
    }
}
export const createProject = async (req: Request, res: Response) => {
    const {name,description,startDate,endDate} = req.body;
    try {
        const project = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                endDate
            }
        });
        res.status(201).json(project);
    } catch (error: any) {
        res.status(500).json({error: `error creating project ${error.message}`});
    }
}
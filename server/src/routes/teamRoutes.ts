import { Router } from "express";
import { getTeams } from "../controller/teamController";


const router = Router();

router.get("/", getTeams);

export default router;
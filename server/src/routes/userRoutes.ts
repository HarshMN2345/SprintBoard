import { Router } from "express";
import { getUsers} from "../controller/userController";


const router = Router();

router.get("/", getUsers);

export default router;
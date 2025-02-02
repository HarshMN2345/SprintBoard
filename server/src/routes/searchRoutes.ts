import { Router } from "express";
import { search } from "../controller/searchController";

const router = Router();

router.get("/", search);

export default router;
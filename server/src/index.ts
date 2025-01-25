import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dot } from "node:test/reporters"
import projectRoutes from "./routes/projectRoutes"
import taskRoutes from "./routes/taskRoutes"

dotenv.config()
const app=express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "same-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("this is home route")
})
app.use("/projects",projectRoutes)
app.use("/tasks",taskRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// use all the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Management Admin!");
});

export default app;

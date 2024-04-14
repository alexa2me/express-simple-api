import express, { Router, Response } from "express";
import { config } from "dotenv";
import MoodController from "./controllers/moodController";

config();

const routes: Router = express.Router();
const moodController = new MoodController();

routes.get("/alo", async (_, res: Response) => {
  res.status(200).send("Diga");
});

routes.post("/mood", moodController.controlAddMood);

export default routes;

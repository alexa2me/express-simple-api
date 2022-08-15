import express, { Router, Response } from "express";
import { config } from "dotenv";
import MoodController from "./controllers/moodController";

config();

const routes: Router = express.Router();
const moodController = new MoodController();

routes.get("/ta-acordado?", async (_, res: Response) => {
  res.status(200).send("eu to e tu?");
});

routes.post("/mood", moodController.controlAddMood);

export default routes;

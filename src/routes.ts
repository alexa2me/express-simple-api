import express, { Router, Response } from "express";
import { config } from "dotenv";
import MoodController from "./controllers/moodController";

config();

const routes: Router = express.Router();
const moodController = new MoodController();

routes.get("/", async (_, res: Response) => {
  res.status(200).send("It's ON!!");
});

routes.post("/mood", moodController.controlAddMood);

routes.get("/mood", moodController.controlGetMoods);

export default routes;

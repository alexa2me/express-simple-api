import { Response, Request } from "express";
import { addMood } from "../data/addMoodQuery";
import { mood } from "../types/mood";
import { getMoods } from "../data/getMoodQuery";

export default class MoodController {
  controlAddMood = async (req: Request, res: Response) => {
    try {
      const { description } = req.body;
      console.log(description);

      if (!description) {
        res.statusCode = 422;
        throw new Error("Preencha 'description'.");
      }

      const newMood: mood = { description };
      await addMood(newMood);

      res.status(200).send({ message: "Mood added successfully!" });
    } catch (err: any) {
      console.log(err);
      res.status(400).send({
        message: err.message,
      });
    }
  };

  controlGetMoods = async (req: Request, res: Response) => {
    try {
      const result = await getMoods();
      res.status(200).send(result);
    } catch (err: any) {
      console.log(err);
      res.status(400).send({
        message: err.message,
      });
    }
  };
}

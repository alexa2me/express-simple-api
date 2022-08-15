import connection from "../connection";
import { mood } from "../types/mood";

// ADD MOOD
export const addMood = async (description: mood): Promise<any> => {
  await connection("mood").insert(description);
};

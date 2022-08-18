import connection from "../connection";
import { mood } from "../types/mood";

// ADD MOOD
export const addMood = async (description: mood): Promise<any> => {
  try {
    await connection("mood").insert(description);
  } catch (err: any) {
    throw new Error(err);
  }
};

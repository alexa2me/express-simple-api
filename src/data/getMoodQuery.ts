import connection from "../connection";

// GET MOODS
export const getMoods = async (): Promise<any> => {
  try {
    const result = await connection("mood");
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

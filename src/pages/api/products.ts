import getProducts from "@/functions/getProducts";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type Error = {
  error: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    res.status(200).json(await getProducts());
  } catch (error) {
    res.status(200).json({ error });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = {
  email: string;
  password: string;
};

type ResponseData = {
  access_token: string;
  refresh_token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, password }: RequestData = req.body;
  res.status(200).json({
    access_token: "access_token_test",
    refresh_token: "refresh_token_test",
  });
}

import type { NextApiRequest, NextApiResponse } from 'next'
import speakeasy from "speakeasy"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const APP_SECRET_NAME = "Macropay Financing:2FA Huella"
  const secret = speakeasy.generateSecret({
    length: 20,
    name: APP_SECRET_NAME,
  });
  
  res.json({
    secret,
  });
}
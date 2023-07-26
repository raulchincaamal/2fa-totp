import type { NextApiRequest, NextApiResponse } from 'next'
import speakeasy from "speakeasy"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const token = req.query.token as string;
  const secret = req.query.secret as string;
  const isValid = speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
  });

  res.json({
    isValid
  });
}

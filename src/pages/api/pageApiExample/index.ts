// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            res.status(200).json({ name: 'John Doe' })
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        case "PATCH":
            break;
        default:
            break;
    }
  }
  
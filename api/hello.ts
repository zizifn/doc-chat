import { Request, Response } from "express-serve-static-core";

export function hello(
  req: Request,
  res: Response,
) {
  res.json({
    "node": "hello",
  });
}

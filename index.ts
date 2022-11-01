// @ts-ignore
import tsv from "typescript-schema-validator";
import express, { Express, Request, Response } from "express";
import schema from "./generated-schema";

const app: Express = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  const a = tsv(schema.UserRequest, { name: "test" });
  console.log(a);
  res.send("Express Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

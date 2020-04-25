import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Mateus",
    email: "matpandino@gmail.com",
    password: "123456",
    techs: [
      "Node.JS",
      "ReactJS",
      "React Native",
      { title: "javascript", experience: 100 },
    ],
  });

  return response.json({ message: "Herou" });
}

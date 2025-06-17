// task crud user
import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { Schema, z } from "zod";
import {
  IAddress,
  IUser,
  UserInstanceMethods,
} from "../interfaces/user.interfaces";
import bcrypt from "bcryptjs";
export const usersRoutes = express.Router();

const UserCreateSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

usersRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    const zodBody = await UserCreateSchema.parseAsync(req.body);
    // console.log(body, "zod body");
    const body = req.body;

    // console.log(password);
    // const user = await User.create(body);
    // body.password = password;

    // Built it and custom instance method

    // const user = new User(body);
    // const password = await (
    //   user as unknown as UserInstanceMethods
    // ).hashPassword(body.password);
    // console.log(password);
    // user.password = password;
    // await user.save();

    // built in and custom static method
    // const password = await User.hashPassword(body.password);
    // console.log(password);
    // body.password = password;
    const user = await User.create(body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});
usersRoutes.get("/", async (req: Request, res: Response) => {
  const userEmail = req.query.email;
  console.log(userEmail);
  let users = [];
  // if (userEmail) {
  //   users = await User.find({ email: userEmail });
  // } else {
  //   users = await User.find();
  // }

  // sorting

  // users = await User.find().sort({ email: "asc" });
  // users = await User.find().sort({ email: "ascending" });
  // users = await User.find().sort({ email: "desc" });
  // users = await User.find().sort({ email: "descending" });
  // users = await User.find().sort({ email: 1 });
  // users = await User.find().sort({ email: -1 });

  // skiping
  // users = await User.find().skip(5);

  //limiting
  users = await User.find().limit(2);
  res.status(201).json({
    success: true,
    message: "All users retrieve successfully",
    users: users,
  });
});
usersRoutes.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  res.status(201).json({
    success: true,
    message: "User retrieve successfully",
    user: user,
  });
});
usersRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedBody = req.body;

  const user = await User.findOneAndUpdate({ _id: userId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "User updated successfully",
    user: user,
  });
});
usersRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  // const user = await User.findByIdAndDelete(userId);
  const user = await User.findOneAndDelete({ _id: userId });

  res.status(201).json({
    success: true,
    message: "User deleted successfully",
    user: user,
  });
});

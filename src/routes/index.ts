import { Router } from "express";
import messageRouter from "./message.router.js";
import memberRouter from "./member.router.js";
import profileRouter from "./profile.router.js";
import chatroomRouter from "./chatroom.router.js";

const mainRouter = Router();

mainRouter.use("/messages", messageRouter);
mainRouter.use("/profiles", profileRouter);
mainRouter.use("chatrooms", chatroomRouter);
mainRouter.use("/members", memberRouter);

export default mainRouter;

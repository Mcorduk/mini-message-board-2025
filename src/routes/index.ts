import { Router } from "express";
import messageRouter from "./messageRouter.js";

const mainRouter = Router();

mainRouter.use("/messages", messageRouter);

export default mainRouter;

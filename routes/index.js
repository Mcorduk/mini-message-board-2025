import { Router } from "express";
import messageRouter from "./messageRouter.js";

const mainRouter = Router();

mainRouter.use(messageRouter);

export default mainRouter;

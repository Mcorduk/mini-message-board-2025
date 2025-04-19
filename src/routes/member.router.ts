import { Router, Request, Response } from "express";
import { MemberController } from "../controllers/member.controller";

const memberRouter = Router();
const memberController: MemberController = new MemberController();

memberRouter.get("/", (req: Request, res: Response) => {
  memberController.getAllMembers(req, res);
});

memberRouter.get("/:memberId", (req: Request, res: Response) => {
  const { memberId } = req.params;
  res.send(`Member Id: ${memberId}`);
});

memberRouter.post("/", (req: Request, res: Response) => {
  const { userId, chatroomId, role } = req.body;
  res.send("Member Created");
});

memberRouter.put("/:memberId", (req: Request, res: Response) => {
  const { memberId } = req.params;
  const { role, status } = req.body;
  res.send(`Member Id: ${memberId} updated`);
});

memberRouter.delete("/:memberId", (req: Request, res: Response) => {
  const { memberId } = req.params;
  res.send(`Member Id: ${memberId} deleted`);
});

export default memberRouter;

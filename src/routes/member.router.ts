import { Router, Request, Response } from "express";
import { MemberController } from "../controllers/member.controller";

const memberRouter = Router();
const memberController: MemberController = new MemberController();

memberRouter.get("/", (req, res) => {
  memberController.getAllMembers(req, res);
});

memberRouter.get("/:memberId", (req, res) => {
  memberController.getProfileMemberships(req, res);
});

memberRouter.post("/", (req, res) => {
  memberController.createMember(req, res);
});

memberRouter.put("/:memberId", (req, res) => {
  memberController.updateMember(req, res);
});

memberRouter.delete("/:memberId", (req, res) => {
  memberController.deleteMember(req, res);
});

export default memberRouter;

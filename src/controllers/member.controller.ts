import { Request, Response } from "express";
import { MemberService } from "../services/member.service";

export class MemberController {
  private memberService: MemberService;

  constructor() {
    this.memberService = new MemberService();
  }

  async getAllMembers(req: Request, res: Response) {
    try {
      const { chatroomId } = req.query;
      const members = await this.memberService.getAllMembers(chatroomId);

      if (!members) {
        return res.status(404).json({ error: "Members not found" });
      }

      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch members" });
    }
  }
}

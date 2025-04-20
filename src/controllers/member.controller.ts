import { Request, Response } from "express";
import { MemberService } from "../services/member.service";

export class MemberController {
  private memberService: MemberService;

  constructor() {
    this.memberService = new MemberService();
  }

  async getAllMembers(req: Request, res: Response) {
    try {
      const chatroomId = Number(req.query.chatroomId);
      const members = await this.memberService.getAllMembers(chatroomId);

      if (!members) {
        return res.status(404).json({ error: "Members not found" });
      }

      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch members" });
    }
  }

  async getProfileMemberships(req: Request, res: Response) {
    try {
      const profileId = String(req.query.profileId);
      const member = await this.memberService.getProfileMemberships(profileId);

      if (!member) {
        return res.status(404).json({ error: "Member not found" });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch member" });
    }
  }

  async createMember(req: Request, res: Response) {
    try {
      const { newMember } = req.body;
      const member = await this.memberService.createMember(newMember);

      if (!member) {
        return res.status(400).json({ error: "Failed to create member" });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Failed to create member" });
    }
  }

  async updateMember(req: Request, res: Response) {
    try {
      const { updates } = req.body;
      const member = await this.memberService.createMember(updates);

      if (!member) {
        return res.status(404).json({ error: "Member not found" });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Failed to update member" });
    }
  }

  async deleteMember(req: Request, res: Response) {
    try {
      const memberId = Number(req.query.memberId);
      const member = await this.memberService.deleteMember(memberId);

      if (!member) {
        return res.status(404).json({ error: "Member not found" });
      }

      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete member" });
    }
  }
}

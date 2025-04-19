import { Request, Response } from "express";
import { ProfileService } from "../services/profile.service";

export class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  async getAllProfiles(req: Request, res: Response) {
    try {
      const profiles = await this.profileService.getAllProfiles();

      if (!profiles) {
        return res.status(404).json({ error: "Profiles not found" });
      }

      res.status(200).json(profiles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profiles" });
    }
  }
}

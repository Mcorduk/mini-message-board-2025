import { Request, Response } from "express";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../types/db/database.types";

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

  async getProfile(req: Request, res: Response) {
    try {
      const profileId = String(req.query.profileId);

      const profile = await this.profileService.getProfile(profileId);

      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }

      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch the profile" });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const profileId = String(req.query.profileId);
      //FIXME Figure this part out I won't work
      const { updates } = req.body;

      const profile = await this.profileService.updateProfile(
        profileId,
        updates
      );

      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }

      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to update the profile" });
    }
  }
}

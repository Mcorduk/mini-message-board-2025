import { Router, Request, Response } from "express";
import { ProfileController } from "../controllers/profile.controller";

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get("/", (req, res) => {
  profileController.getAllProfiles(req, res);
});

profileRouter.get("/:profileId", (req, res) => {
  profileController.getProfile(req, res);
});

profileRouter.put("/:profileId", (req: Request, res: Response) => {
  profileController.updateProfile(req, res);
});

// profileRouter.delete("/:profileId", (req: Request, res: Response) => {
//   const { profileId } = req.params;
//   res.send(`Profile Id: ${profileId} deleted`);
// });

export default profileRouter;

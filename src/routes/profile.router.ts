import { Router, Request, Response } from "express";

const profileRouter = Router();

profileRouter.get("/", (req: Request, res: Response) => {
  res.send("All profiles");
});

profileRouter.get("/:profileId", (req: Request, res: Response) => {
  const { profileId } = req.params;
  res.send(`Profile Id: ${profileId}`);
});

profileRouter.post("/", (req: Request, res: Response) => {
  const { name, email, avatar } = req.body;
  res.send("Profile Created");
});

profileRouter.put("/:profileId", (req: Request, res: Response) => {
  const { profileId } = req.params;
  const { name, email, avatar } = req.body;
  res.send(`Profile Id: ${profileId} updated`);
});

profileRouter.delete("/:profileId", (req: Request, res: Response) => {
  const { profileId } = req.params;
  res.send(`Profile Id: ${profileId} deleted`);
});

export default profileRouter;

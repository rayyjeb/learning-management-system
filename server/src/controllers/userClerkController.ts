import { Request, Response } from "express";
import { clerkClient } from "../index";
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const userData = req.body;
  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetaData.userType,
        settings: userData.publicMetaData.settings,
      },
    });
    res.json({ message: "User Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Updating User", error });
  }
};

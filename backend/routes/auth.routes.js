import express from "express";
import {
  login,
  logout,
  signin,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;

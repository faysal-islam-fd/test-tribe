import express from "express";
import { longin, signup } from "../controllers/user.controller.js";

const router = express.Router()
router.post('/signup', signup)
router.post('/login',longin)

export default router;
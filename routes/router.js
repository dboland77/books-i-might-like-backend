import express from "express";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const router = express.Router();

router.post("/sign-up", (req, res, next) => {});

router.post("/login", (req, res, next) => {});

router.get("/main", (req, res, next) => {
  res.send("logged in");
});

export default router;
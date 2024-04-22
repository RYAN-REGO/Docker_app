import express from "express";
import { createPost, latestPosts } from "../controllers/post.js";
import { getPosts } from "../controllers/post.js";

const router = express.Router();

router.post('/create', createPost);
router.get('/get', getPosts);
router.get('/latest', latestPosts);

export default router;
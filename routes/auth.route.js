import express from 'express';
import { SellerSignUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/Seller-signup", SellerSignUp);

export default router;
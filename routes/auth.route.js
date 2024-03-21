import express from 'express';
import { SellerSignUp, SellerLogin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/Seller-signup", SellerSignUp);
router.post("/Seller-login", SellerLogin);
router.post("/google");

export default router;
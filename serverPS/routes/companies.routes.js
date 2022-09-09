import { Router } from "express";
import { getCompany, loginCompany, register } from "../controllers/company.js";
const router = Router();
router.get('/company/:id', getCompany);
router.post('/login', loginCompany)
router.post('/register', register)
export default router;

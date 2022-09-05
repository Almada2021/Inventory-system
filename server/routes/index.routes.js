import { Router } from "express";
import {pool} from "../db.js"
const router = Router();
router.get('/ping',async (req, res) =>{
    const [rows] = await pool.query('SELECT 1 + 1 as result');
    res.json(rows)
});
export default router;
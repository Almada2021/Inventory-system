import {Router} from "express";
import { addProvider, deleteProvider } from "../controllers/provider.js";
const router = Router();

router.post('/add/provider', addProvider );
router.delete('/delete/provider/:id', deleteProvider );
export default router;
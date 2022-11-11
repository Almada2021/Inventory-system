import {Router} from "express";
import { addProvider, deleteProvider, getAllProvider } from "../controllers/provider.js";
const router = Router();

router.post('/add/providers', addProvider );
router.get('/get/providers/:id', getAllProvider );
router.delete('/delete/providers/:id', deleteProvider );
export default router;
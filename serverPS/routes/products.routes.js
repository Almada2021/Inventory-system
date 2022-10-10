import {Router} from "express"
import { addProduct, deleteProduct, updateProduct, getAllProducts, getSingleProduct } from "../controllers/products.js";
const router = Router();
router.get("/products", getAllProducts)
router.get("/products/:id",getSingleProduct)
router.post("/add",addProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);
export default router;
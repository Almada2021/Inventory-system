import express from "express";
import dotenv from "dotenv";
import companiesRouter from './routes/companies.routes.js';
import productsRouter from './routes/products.routes.js';
import providerRouter from './routes/provider.routes.js';
import cors from "cors"
const PORT = 8000
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
app.listen(PORT, async() =>{
   
    console.log(`server is ready in  port ${PORT}`)
})
app.use(companiesRouter);
app.use(productsRouter);
app.use(providerRouter);
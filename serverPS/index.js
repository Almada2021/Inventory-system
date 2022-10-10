import express from "express";
import dotenv from "dotenv";
import companiesRouter from './routes/companies.routes.js';
import productsRouter from './routes/products.routes.js';
import providerRouter from './routes/provider.routes.js';
dotenv.config();
const app = express();
app.use(express.json())
app.listen(3000, async() =>{
   
    console.log(`server is ready in  port ${process.env.PORT_USE}`)
})
app.use(companiesRouter);
app.use(productsRouter);
app.use(providerRouter);
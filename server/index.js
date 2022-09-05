import express from "express"; 
import cors from 'cors';
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
const app = express();
app.listen(PORT, (req, res) =>{
});
/*
puedes poner el objeto para filtrar la ip a conectar en mysql
{
    origin: 'http://localhost:5173'
}

*/
app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);
console.log(`Server is listening on port ${PORT}`)
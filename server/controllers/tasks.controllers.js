import { pool } from "../db.js";

export const getTasks = async(req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
        res.json(result);
        
    } catch (err) {
        return res.status(500).json({message: err.message})

    }
};
export const getTask = async(req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
        const resp =await result[0];
        if (resp.length === 0){
            return res.status(404).json({message: "Task not found"});
        }
        res.json(resp[0]);
        
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}; 
export const createTask = async(req, res) =>{
    console.log(req.body)
    try {
        const {title, description} = req.body;
        const result = await pool.query(
            "INSERT INTO tasks(title, description) VALUES (?, ?)",
            [title, description]
        );
        res.send("create task");
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
};
export const updateTask = async(req, res) =>{
    try {
        const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
            req.body,
            req.params.id
        ]);
        res.json(result);
        
    } catch (err) {
        return res.status(500).json({message: err.message})        
    }
};
export const deleteTask = async(req, res) =>{
    try{
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ? ", [req.params.id]);
        if (result.affectedRows ===0){
            return res.status(404).json({message: "Task not found"});
        }
        return res.sendStatus(204);
    }catch(err){
        return res.status(500).json({message: err.message})
    }
};
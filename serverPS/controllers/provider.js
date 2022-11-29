import { dbObject } from "../database/connection.database.js";
import { ADD_PROVIDER, DELETE_PROVIDER, ALL_PROVIDERS_USER } from "../Query/index.js";

export const addProvider = async (req,res) =>{
    try {
        const {name, phone, created_by} = req.body
        const createProvider = await dbObject(ADD_PROVIDER, [String(name), String(phone), created_by])
        if (!createProvider){
            throw new Error("don't work")
        }
    } catch (err) {
        console.log("error")
        return res.json("something wrong with database")
    }finally{
        return res.json("provider created")
    }
};

export const deleteProvider = async (req,res) => {
    const {id} = req.params;
    let message = ""
    try {
        const delete_provider = await dbObject(DELETE_PROVIDER,[id])
    } catch (error) {
        
    }
    finally{
        return res.json(message)
    }
};
export const getAllProvider = async (req, res) => {
    try {
        const {id} = req.params
        const response = await dbObject( ALL_PROVIDERS_USER ,[id])
        const [rows] = response
        if (rows.length === 0){
            throw new Error("don't have providers")
        }
        return res.json(rows)
    } catch (error) {
        return res.json("error or don't have providers")
    }
}
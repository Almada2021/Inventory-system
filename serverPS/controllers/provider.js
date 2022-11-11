import { dbObject } from "../database/connection.database.js";
import { ADD_PROVIDER, DELETE_PROVIDER, ALL_PROVIDERS_USER } from "../Query/index.js";

export const addProvider = async (req,res) =>{
    const {
        name,
        phone,
        created_by
    } = req.body;
    let message = "";
    try {
        const createProvider = dbObject(ADD_PROVIDER, [name, phone, created_by])
        
    } catch (err) {
        console.log(err)
    }
    finally{
        return res.json()
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
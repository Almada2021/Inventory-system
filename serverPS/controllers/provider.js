import { dbObject } from "../database/connection.database.js";
import { ADD_PROVIDER, DELETE_PROVIDER } from "../Query/index.js";

export const addProvider = async (req,res) =>{
    console.log(req.body)
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
}
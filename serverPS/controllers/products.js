import { ADD_PRODUCT, DELETE_PRODUCT, ALL_PRODUCTS, GET_ONE_PRODUCT} from "../Query/index.js";
import { dbObject } from "../database/connection.database.js";
//comprove the add variable
export const addProduct = async(req,res) =>{
   
    const {name, description, stock, price, create_by, provider} = req.body;
    let message = "";
    try {
        if(!name || !description || !stock || !price || !create_by || !provider) {
            message = "Missing some data";
            throw new Error("Missing some data");
        }
        
        const add = await dbObject(ADD_PRODUCT,[name, description, stock, price, create_by, provider]) 
        if (!add){ 
            message = "Failed resource loading";
        }else{
            message = "product has be create";
        }
        res.status(200).json(message);      
    } catch (err) {
        res.status(200).json(message);
    }
    finally{
        return res;       
    }
}
export const deleteProduct = async(req, res) =>{
    const {id} = req.params; 
    let message = "";
    try {
        const delete_row = await dbObject(DELETE_PRODUCT, [id])
        if (delete_row[0].affectedRows > 0){
            message = "the product has be deleted"
            res.status(200)
        }else{
            message = "the product not exist"
            res.status(400)

        }
    } catch (err) {
        console.log(err)       
    }finally{
        return res.json(message)
    }
}
export const updateProduct = async(req,res) =>{
    const {id} = req.params;
    const {argument, value} = req.body;
    const UPDATE_PRODUCT = `UPDATE products SET ${argument}=? WHERE id=?`;
    let message = "";
    try {
        const update_product = await dbObject(UPDATE_PRODUCT,[ value, id])
            .then((product) => updateProduct[0]) 
            .catch((err) => "failed")      
        if(update_product[0].affectedRows < 1){
            message = "something wrong";
            res.status(200).json(message);
        }else{
            message= "product has be updated";
            res.status(200).json(message);

        }
    } catch (err) {
        message = "cannot read a properties"
        res.json(message)
    }finally{
        return res
    }
}

export const getAllProducts = async(req,res) => {
    const {id} = req.params;
    try {
        const response = await dbObject(ALL_PRODUCTS,[id]);
        const [rows] = response;
        res.send(rows !== undefined ? rows : []);    
    } catch (err) {
        const error = new Error("failed to brought data")
        res.json([])
    }finally{
        return res;
    }
}   
export const getSingleProduct = async(req,res) => {   
    const {id} = req.params;
    try {
        const response = await dbObject(GET_ONE_PRODUCT,[id]);
        const [rows] = response; 
        if(!rows[0]){
            throw new Error("failed")
        }
        return res.json(rows[0]);
    } catch (err) {
        res.status(200).json(err.message)
    }finally{
        return res;
    }
}
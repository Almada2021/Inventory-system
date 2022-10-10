import { dbObject } from "../database/connection.database.js"
import bcrypt from "bcrypt";
export const getCompany = async(req, res) =>{
    const {id} = req.params;
    const QUERY_PRODUCTS = "SELECT * FROM companies WHERE id=?"
    try{
        const [rows] = await dbObject(QUERY_PRODUCTS, [id]);
        const data = rows[0]
        if (data !== undefined){
            res.status(200)
            res.json(data)
        }else{
            throw new Error("Data is undefined")
        }
        // data!== undefined? res.json(rows[0]) : res.status(400).json({message : "Not found"})
    }
    catch(err){
        res.status(400)
        res.json({message: "we have a wrong"})
        // console.log(err)
    }finally{
        return res
    }
}
// ready 1
export const loginCompany = async(req,res) => {
    const QUERY_LOGIN = "";
    const {email, password} = req.body;
    try {
        
    } catch (err) {
        console.log(err)
    }

}
//
export const register = async(req, res) =>{
    const QUERY_SIGN_UP = "INSERT INTO  companies(company_name,email,password) VALUES(?,?,?)";
    const {name, email, password} = req.body;
    let message= ""
    try {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password,salt)
        const reg = await dbObject(QUERY_SIGN_UP,[name,email, hashedpassword])
        if(reg){
            message = "yes";
        }else{
            throw new Error("data missunderstanding");
        }
    } catch (err) {
        message = "error";

    }finally{
        return res.json({message: message});
    }
}
//1
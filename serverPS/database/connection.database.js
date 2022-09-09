import mysql from "mysql2/promise";
export const dbObject= async(req, args=[]) => {
    try{
        const conectDB = await mysql.createConnection(`${process.env.DB_URL}`);
        const res = await conectDB.query(req, [...args]);
        return res;
    }
    catch(err){
        console.log(err);
    }
}
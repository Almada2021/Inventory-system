
//Products
export const GET_ONE_PRODUCT = "SELECT * FROM products WHERE id=?";
export const ADD_PRODUCT = "INSERT INTO products(name, description, stock,price,created_by, provider) VALUES(?,?,?,?,?,?);";
export const DELETE_PRODUCT = "DELETE FROM products WHERE id=?";
export const ALL_PRODUCTS = "SELECT  products.id , products.name, products.description, products.price, companies.company_name FROM products INNER JOIN companies ON products.id=companies.id  WHERE companies.id=?;"

//Provider
export const ADD_PROVIDER = "INSERT INTO provider(name, phone, created_by) VALUES( ? , ? , ? )";
export const DELETE_PROVIDER = "DELETE FROM provider WHERE id=?";


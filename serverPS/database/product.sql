CREATE TABLE products(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(200) NOT NULL,description VARCHAR(1000) NOT NULL,
    stock INT NOT NULL, 
    price DECIMAL(9,7) NOT NULL, created_by INT NOT NULL,
    provider INT NOT NULL
);
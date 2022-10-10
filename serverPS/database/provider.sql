CREATE TABLE provider (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(200) NOT NULL,
	phone varchar(200) NOT NULL,
	created_by int NOT NULL,
	PRIMARY KEY (id)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
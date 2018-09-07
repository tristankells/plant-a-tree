# plant-a-tree
This is a web application made for Contemporary Methods in Software Engineering, Semester 2, 2018

# requirements
To run this project the following items are required:
* node.js
* npm
* SQL database with the following tables
  * Trees
  1.	Name	varchar(15)	utf8_bin	
	 2.	Price	float	
	 3.	Type	varchar(15)	utf8_bin
  4.	Deliverable	tinyint(1)	
  * Users
  1.	username	varchar(15)	utf8_bin		
	 2.	hash	varchar(70)	utf8_bin
	 3.	created_at	varchar(90)	utf8_bin
  
If your project does not start up after a pull request you may be missing a dependancy which can be fixed via the command:
** npm i ** In your main folder

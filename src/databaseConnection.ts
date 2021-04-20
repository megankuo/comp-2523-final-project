import mysql from "mysql2"

const is_heroku = process.env.IS_HEROKU || false;

export const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b6fdd10d08cf4c",
	password: "14bbc16a",
	database: "heroku_0226e7c2fcc1076",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "jj9292811",
	database: "devHouse",
	multipleStatements: false,
	namedPlaceholders: true
};

// if (is_heroku) {
// 	var database = mysql.createPool(dbConfigHeroku);
// } else {
// 	var database = mysql.createPool(dbConfigLocal);
// }
export const database = mysql.createPool(dbConfigHeroku);


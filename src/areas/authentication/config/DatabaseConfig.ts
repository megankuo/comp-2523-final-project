import mysql from "mysql2"

// Effort at implementing a local database on MySQL and online database on ClearDB
const is_heroku = process.env.IS_HEROKU || false;

export const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b6fdd10d08cf4c",
	password: "14bbc16a",
	database: "heroku_0226e7c2fcc1076",
	multipleStatements: false,
	namedPlaceholders: true
};

export const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Il0v3y0u~",
	database: "devhouse",
	multipleStatements: false,
	namedPlaceholders: true
};

export const database = () => {
    if (is_heroku) {
        return mysql.createPool(dbConfigHeroku);
    }
    else {
        return mysql.createPool(dbConfigLocal);
    }
}
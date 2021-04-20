import mysql from "mysql2"

// Implemented a Database Config to test local host / Heroku (ClearDB connection)
const is_heroku = process.env.IS_HEROKU || false;

export const dbConfigHeroku = {
    host: "us-cdbr-east-03.cleardb.com",
    user: "b6fdd10d08cf4c",
    password: "14bbc16a",
    database: "heroku_0226e7c2fcc1076",
    multipleStatements: false, // Prevents multiple statements for SQL injection
    namedPlaceholders: true // Requires the use of named placeholders instead of directly pushing values
};

//Only used to test in local host
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
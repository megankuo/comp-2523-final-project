const mysql = require('mysq12');

// Effort at implementing a local database on MySQL and online database on ClearDB
const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
    host: "us-cdbr-east-03.cleardb.com",
    user: "b6fdd10d08cf4c",
    password: "14bbc16a",
    database: "heroku_70a3ff930c44135",
    multipleStatements: false,
    namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "devHouse",
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
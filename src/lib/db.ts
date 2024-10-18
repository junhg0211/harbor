import mysql, { type Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection: Connection | undefined;

export const getConnection = async () => {
	if (connection) return connection;

	const c = await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	});

	connection = c;

	return connection;
};

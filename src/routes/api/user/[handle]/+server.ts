import { error, json, type RequestHandler } from '@sveltejs/kit';
import { getConnection } from '$lib/db';
import type { FieldPacket } from 'mysql2';

export const GET: RequestHandler = async ({ params }) => {
	const { handle } = params;
	const connection = await getConnection();
	const [rows]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT * FROM user WHERE handle LIKE ?',
		[handle]
	);

	if (rows.length <= 0) {
		return error(404, 'Account not found');
	}

	return json(rows[0]);
};

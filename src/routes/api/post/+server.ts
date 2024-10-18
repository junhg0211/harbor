import { json, type RequestHandler } from '@sveltejs/kit';
import { getConnection } from '$lib/db';
import type { FieldPacket } from 'mysql2';

export const GET: RequestHandler = async () => {
	const connection = await getConnection();
	const [rows]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT *, post.id AS post_id FROM post LEFT JOIN user ON user.id = post.author AND NOT post.removed LIMIT 50'
	);

	return json(rows);
};

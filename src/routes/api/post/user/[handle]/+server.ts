import { json, redirect, type RequestHandler } from '@sveltejs/kit';
import { getConnection } from '$lib/db';
import type { FieldPacket } from 'mysql2';

export const GET: RequestHandler = async ({ params }) => {
	const { handle } = params;
	const connection = await getConnection();
	const [rows]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT *, post.id AS post_id FROM post LEFT JOIN user ON user.id = post.author WHERE user.handle LIKE ?',
		[handle]
	);

	return json(rows);
};

export const POST: RequestHandler = async ({ params, request }) => {
	const r = new URLSearchParams(await request.text());
	const content = r.get('content');
	const connection = await getConnection();

	const { handle } = params;
	const [rows, _]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT id FROM user WHERE handle LIKE ?',
		[handle]
	);
	const authorId = rows[0].id;

	await connection.query('INSERT INTO post(author, upload, content) VALUES(?, ?, ?)', [
		authorId,
		new Date(),
		content
	]);

	return redirect(303, '/');
};

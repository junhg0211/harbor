import { json, redirect, type RequestHandler } from '@sveltejs/kit';
import { getConnection } from '$lib/db';
import type { FieldPacket } from 'mysql2';

export const GET: RequestHandler = async ({ params }) => {
	const { handle } = params;
	const connection = await getConnection();
	const [rows]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT * FROM post LEFT JOIN user ON user.id = post.author WHERE user.handle LIKE ?',
		[handle]
	);

	return json(rows);
};

export const POST: RequestHandler = async ({ request }) => {
	const r = new URLSearchParams(await request.text());
	const content = r.get('content');
	console.log(content);

	return new Response('ok');
};

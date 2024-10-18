import { getConnection } from '$lib/db';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { FieldPacket } from 'mysql2';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	const connection = await getConnection();
	const [post]: [Array<any>, FieldPacket[]] = await connection.query(
		'SELECT *, post.id AS post_id FROM post LEFT JOIN user ON user.id = post.author WHERE post.id = ?',
		[id]
	);

	if (post.length <= 0) {
		return error(404, 'post not found');
	}

	return json(post[0]);
};

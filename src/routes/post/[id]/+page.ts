import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const { id } = params;

	const post = await (await fetch(`/api/post/${id}`)).json();

	return { post };
};

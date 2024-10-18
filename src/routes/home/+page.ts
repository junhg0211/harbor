import type { Load } from '@sveltejs/kit';

export let load: Load = async ({ fetch }) => {
	const posts = await (await fetch('/api/post')).json();

	return { posts };
};

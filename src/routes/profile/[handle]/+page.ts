import type { Load } from '@sveltejs/kit';

export const load: Load = async (loadEvent) => {
	const { params, fetch } = loadEvent;
	const { handle } = params;

	const user = await (await fetch(`/api/user/${handle}`)).json();
	const posts = await (await fetch(`/api/post/user/${handle}`)).json();

	return { user, posts };
};

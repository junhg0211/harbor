<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import Link from '../../Link.svelte';

	export let data;
	const { posts } = data;
</script>

<Page selected="home">
	<Post
		post={{
			name: 'Post Author',
			handle: 'post.author',
			cache_replys: 0,
			cache_shares: 0,
			cache_likes: 0,
			pfp: '/example/author.png',
			post_id: 0,
			content: 'Hello, wolrd!',
			public_range: 0
		}}
	/>
	<Post
		post={{
			name: 'Another Author',
			handle: 'another.author',
			cache_replys: 10,
			cache_shares: 10,
			cache_likes: 10,
			pfp: '/example/author.png',
			post_id: 0,
			public_range: 0,
			content: 'Longer post with some\nlinebreaks'
		}}
	></Post>
	<Post
		post={{
			name: 'Another Author',
			handle: 'another.author',
			cache_replys: 10,
			cache_shares: 10,
			cache_likes: 10,
			public_range: 4,
			pfp: '/example/author.png',
			post_id: 0,
			content: 'with medias!'
		}}
		images={['/example/author.png']}
	/>
	<Post
		post={{
			name: 'Another Author',
			handle: 'another.author',
			cache_replys: 10,
			cache_shares: 10,
			cache_likes: 10,
			public_range: 3,
			pfp: '/example/author.png',
			post_id: 0,
			content: 'with medias!'
		}}
		images={['/example/author.png', '/icon/globe.svg']}
	/>
	<Post
		post={{
			name: 'Another Author',
			handle: 'another.author',
			cache_replys: 10,
			cache_shares: 10,
			cache_likes: 10,
			public_range: 2,
			pfp: '/example/author.png',
			post_id: 0,
			content: 'with medias!'
		}}
		images={['/example/author.png', '/example/author.png', '/example/author.png']}
	/>
	<Post
		post={{
			name: 'Another Author',
			handle: 'another.author',
			cache_replys: 10,
			cache_shares: 10,
			cache_likes: 10,
			public_range: 1,
			pfp: '/example/author.png',
			post_id: 0,
			content: 'with medias!'
		}}
		images={['/icon/lock.svg', '/icon/reply.svg', '/icon/heart.svg', '/icon/settings.svg']}
	/>
	{#each posts as post}
		<Post {post} />
	{/each}
</Page>

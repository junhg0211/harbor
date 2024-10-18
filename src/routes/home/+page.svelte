<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import Link from '../../Link.svelte';

	export let data;
	const { posts } = data;
</script>

<Page selected="home">
	<Post
		authorName="Post Author"
		authorHandle="post.author · 3 hours"
		replys="0"
		shares="0"
		likes="0"
		src="/example/author.png"
	>
		Hello, world!
	</Post>
	<Post
		authorName="Another Author"
		authorHandle="another.author · 3 hours"
		replys="10"
		shares="10"
		likes="10"
		src="/example/author.png"
	>
		Longer post with some<br />linebreaks
	</Post>
	<Post
		authorName="Another Author"
		authorHandle="another.author · 3 hours"
		replys="10"
		shares="10"
		likes="10"
		images={['/example/author.png']}
		publicRange={4}
		src="/example/author.png"
	>
		with medias!
	</Post>
	<Post
		authorName="Another Author"
		authorHandle="another.author · 3 hours"
		replys="10"
		shares="10"
		likes="10"
		images={['/example/author.png', '/icon/globe.svg']}
		publicRange={3}
		src="/example/author.png"
	>
		with medias!
	</Post>
	<Post
		authorName="Another Author"
		authorHandle="another.author · 3 hours"
		replys="10"
		shares="10"
		likes="10"
		images={['/example/author.png', '/example/author.png', '/example/author.png']}
		src="/example/author.png"
		publicRange={2}
	>
		with medias!
	</Post>
	<Post
		authorName="Another Author"
		authorHandle="another.author · 3 hours"
		src="/example/author.png"
		replys="10"
		shares="10"
		likes="10"
		images={['/icon/lock.svg', '/icon/reply.svg', '/icon/heart.svg', '/icon/settings.svg']}
		publicRange={1}
	>
		with medias!
	</Post>
	<Post
		authorName="Another Author"
		src="/example/author.png"
		authorHandle="another.author · 3 hours"
		replys="10"
		shares="10"
		likes="10"
	>
		This<br />
		is<br />
		very<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		long<br />
		post with a <Link>#hashtag</Link>
	</Post>
	{#each posts as post}
		<Post
			authorName={post.name}
			src={post.pfp}
			authorHandle={post.handle}
			replys={post.cache_replys}
			likes={post.cache_likes}
			shares={post.cache_shares}
			id={post.post_id}
		>
			{post.content}
		</Post>
	{/each}
</Page>

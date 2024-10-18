<script lang="ts">
	import Page from '../../../Page.svelte';
	import Post from '../../../Post.svelte';
	import Link from '../../../Link.svelte';

	export let data;
	const { post } = data;
</script>

<Page selected="">
	<div class="title">Post</div>
	<Post
		authorName={post.name}
		authorHandle={post.handle}
		replys={post.cache_replys}
		likes={post.cache_likes}
		shares={post.cache_shares}
		ignoreClick
		publicRange={post.public_range}
		src={post.pfp}
		id={post.post_id}
	>
		{post.content}
	</Post>
	<div class="horizontal-line"></div>
</Page>

<style>
	.title {
		font-weight: bold;
		margin-bottom: 12px;
	}

	.horizontal-line {
		border-bottom: 1px solid #ddd;
	}
</style>

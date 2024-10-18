<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import Link from '../../Link.svelte';
</script>

<Page>
	<div class="title">Post</div>
	<Post
		authorName="Post Author"
		authorHandle="@post.author · 3 hours"
		replys="0"
		likes="0"
		shares="0"
		ignoreClick
		publicRange="2"
	>
		This is content of the post. The content of this post is written by <Link href="/profile"
			>@sch.jeon</Link
		> . What is this?
	</Post>
	<div class="horizontal-line"></div>
	<Post>This is anchoring post</Post>
	<Post>This is anchoring post</Post>
	<Post>This is anchoring post</Post>
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

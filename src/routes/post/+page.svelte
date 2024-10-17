<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
</script>

<Page>
	<div class="title">Post</div>
	<Post
		authorName="Post Author"
		authorHandle="@post.author · 3 hours"
		replys="0"
		likes="0"
		shares="0">This is content of the post</Post
	>
</Page>

<style>
	.title {
		font-weight: bold;
		margin-bottom: 12px;
	}
</style>

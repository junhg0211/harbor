<script lang="ts">
	import Page from '../../../Page.svelte';
	import Post from '../../../Post.svelte';
	import Link from '../../../Link.svelte';

	export let data;
	const { post } = data;
</script>

<Page selected="">
	<div class="title">Post</div>
	<Post {post} ignoreClick />
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

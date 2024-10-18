<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
</script>

<Page selected="search">
	<div class="input-container">
		<input placeholder="Query" />
		<img src="/icon/globe.svg" />
	</div>
	<Post>Result posts</Post>
	<Post>Result posts</Post>
	<Post>Result posts</Post>
</Page>

<style>
	.input-container {
		width: calc(100% - 24px);
		padding: 12px;
		border: none;
		background-color: #eee;
		border-radius: 1000px;
		display: flex;
	}

	.input-container input {
		flex: 1;
		background-color: transparent;
		border: none;
		outline: none;
	}

	.input-container img {
		height: 20px;
		vertical-align: middle;
	}
</style>

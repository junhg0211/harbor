<script lang="ts">
	import Post from './Post.svelte';
	import Navigation from './Navigation.svelte';

	export let selected;
</script>

<div class="ancient-container">
	<div class="main-container">
		<Navigation {selected} />
		<div class="article">
			<slot></slot>
		</div>
	</div>
</div>

<style>
	.main-container {
		height: 100vh;
		display: flex;
		max-width: 840px;
		margin: auto;
		gap: 36px;
		flex-direction: row;
	}

	.article {
		margin-top: 32px;
		flex: 1;
		overflow: scroll;
	}
</style>

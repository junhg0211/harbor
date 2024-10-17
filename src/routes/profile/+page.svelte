<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
</script>

<Page selected="profile">
	<div>
		<Post authorName="Author Name" authorHandle="@author.name · now" replys="0" likes="0" shares="0"
			>Hello, world!</Post
		>
		<Post authorName="Author Name" authorHandle="@author.name · now" replys="0" likes="0" shares="0"
			>Hello, world!</Post
		>
		<Post authorName="Author Name" authorHandle="@author.name · now" replys="0" likes="0" shares="0"
			>Hello, world!</Post
		>
		<Post authorName="Author Name" authorHandle="@author.name · now" replys="0" likes="0" shares="0"
			>Hello, world!</Post
		>
	</div>
	<div class="pfp">
		<img src="/example/author.png" />
		<div class="name">Author Name</div>
		<div class="handle">@author.name</div>
	</div>
</Page>

<style>
	.pfp {
		text-align: center;
		margin-top: 24px;
	}

	.pfp img {
		width: 120px;
		height: 120px;
		border-radius: 24px;
		margin-bottom: 12px;
	}

	.name {
		font-weight: bold;
		font-size: 20px;
	}
</style>

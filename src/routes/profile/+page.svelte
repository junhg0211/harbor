<script lang="ts">
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import ActionListRow from '../../ActionListRow.svelte';
</script>

<Page selected="profile">
	<div>
		<Post
			authorName="Author Name"
			authorHandle="@author.name · now"
			replys="0"
			likes="0"
			shares="0"
		>
			Hello, world!
		</Post>
		<Post
			authorName="Author Name"
			authorHandle="@author.name · now"
			replys="0"
			likes="0"
			shares="0"
		>
			Hello, world!
		</Post>
		<Post
			authorName="Author Name"
			authorHandle="@author.name · now"
			replys="0"
			likes="0"
			shares="0"
		>
			Hello, world!
		</Post>
		<Post
			authorName="Author Name"
			authorHandle="@author.name · now"
			replys="0"
			likes="0"
			shares="0"
			publicRange="2"
		>
			Hello, world!
		</Post>
	</div>
	<div class="pfp-container">
		<img src="/example/author.png" class="pfp" />
		<div class="name">Author Name</div>
		<div class="handle">@author.name</div>
		<div class="bio">Hello, world! This is my bio.</div>
		<div>Follows me</div>
		<div>Joined at 2024. 10</div>
	</div>
	<div class="settings">
		<ActionListRow src="/icon/follow.svg">Follow</ActionListRow>
		<ActionListRow src="/icon/block.svg">Block</ActionListRow>
		<ActionListRow src="/icon/wave.svg">Remove follower</ActionListRow>
	</div>
</Page>

<style>
	.pfp-container {
		text-align: center;
		margin-top: 24px;
	}

	.pfp {
		width: 120px;
		height: 120px;
		border-radius: 24px;
		margin-bottom: 12px;
	}

	.name {
		font-weight: bold;
		font-size: 20px;
	}

	.handle {
		color: grey;
		margin-bottom: 12px;
	}

	.bio {
		margin-top: 12px;
		margin-bottom: 18px;
	}

	.settings {
		margin-top: 24px;
	}
</style>

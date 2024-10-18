<script lang="ts">
	import Page from '../../../Page.svelte';
	import Post from '../../../Post.svelte';
	import ActionListRow from '../../../ActionListRow.svelte';

	export let data;
	const { user, posts } = data;
	const joined = new Date(user.joined).toLocaleDateString();
</script>

<Page selected="profile">
	<div>
		{#each posts as post}
			<Post
				authorName={post.name}
				authorHandle={post.handle}
				replys={post.cache_replys}
				likes={post.cache_likes}
				shares={post.cache_shares}
				publicRange={post.public_range}
			>
				{post.content}
			</Post>
		{/each}
	</div>
	<div class="pfp-container">
		<img src={user.pfp} class="pfp" />
		<div class="name">{user.name}</div>
		<div class="handle">@{user.handle}</div>
		<div class="bio">{user.bio}</div>
		<div>Follows me</div>
		<div>Joined at {joined}</div>
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

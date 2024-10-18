<script lang="ts">
	import { goto } from '$app/navigation';
	import Media from './Media.svelte';

	export let authorName;
	export let authorHandle;
	export let replys;
	export let likes;
	export let shares;
	export let publicRange = '0';
	export let images = [];
	export let ignoreClick = false;
</script>

<div class="post">
	<div class="author">
		<img src="/example/author.png" />
	</div>
	<div class="article">
		<div class="head">
			<span class="author-name">{authorName}</span>
			<span class="handle">{authorHandle}</span>
		</div>
		<div
			class="content"
			on:click={function () {
				if (!ignoreClick) goto('/post');
			}}
		>
			<slot></slot>
		</div>
		{#if images.length == 1}
			<div class="images1">
				<Media src={images[0]} place="11" />
			</div>
		{:else if images.length == 2}
			<div class="images2">
				<Media src={images[0]} place="21" />
				<Media src={images[1]} place="22" />
			</div>
		{:else if images.length == 3}
			<div class="images3">
				<div class="images3-left">
					<Media src={images[0]} place="31" />
				</div>
				<div class="images3-right">
					<Media src={images[1]} place="32" />
					<Media src={images[2]} place="33" />
				</div>
			</div>
		{:else if images.length == 4}
			<div class="images4">
				<div class="images4-left">
					<Media src={images[0]} place="41" />
					<Media src={images[1]} place="42" />
				</div>
				<div class="images4-left">
					<Media src={images[2]} place="43" />
					<Media src={images[3]} place="44" />
				</div>
			</div>
		{/if}
		{#if publicRange !== '0'}
			<div class="public-range">
				{#if publicRange === '1'}
					<img src="/icon/login.svg" />
					This post is accessible to logged-in users.
				{:else if publicRange === '2'}
					<img src="/icon/profile.svg" />
					This post is unaccessible to specific users.
				{:else if publicRange === '3'}
					<img src="/icon/link.svg" />
					This post is accessible to specific users.
				{:else if publicRange === '4'}
					<img src="/icon/lock.svg" />
					This post is private.
				{/if}
			</div>
		{/if}
		<div class="footer">
			<div class="footer-icon-container">
				<img src="/icon/reply.svg" /> <span>{replys}</span>
			</div>
			<div class="footer-icon-container">
				<img src="/icon/share.svg" /> <span>{shares}</span>
			</div>
			<div class="footer-icon-container">
				<img src="/icon/heart.svg" /> <span>{likes}</span>
			</div>
			<div class="footer-icon-container">
				<img src="/icon/list.svg" />
			</div>
		</div>
	</div>
</div>

<style>
	.post {
		padding: 12px;
		display: flex;
		gap: 12px;
		transition: background-color ease-in-out 100ms;
		border-radius: 24px;
		margin-bottom: 8px;
		margin-top: 8px;
	}

	.author img {
		height: 40px;
		border-radius: 100px;
	}
	.article {
		flex: 1;
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}
	.author-name {
		font-weight: bold;
	}
	.handle {
		color: grey;
	}

	.content {
		cursor: pointer;
	}

	.images2 {
		display: flex;
		gap: 2px;
	}
	.images3 {
		height: 240px;
		display: flex;
		gap: 2px;
	}
	.images3-left {
		flex: 1;
	}
	.images3-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.images4 {
		height: 240px;
		display: flex;
		gap: 2px;
	}
	.images4-left {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.public-range {
		padding: 12px;
		background-color: #cfc;
		border-radius: 8px;
	}
	.public-range img {
		height: 20px;
		vertical-align: middle;
	}

	.footer {
		display: flex;
		justify-content: space-between;
	}
	.footer-icon-container {
		border-radius: 1000px;
		padding: 6px;
		transition: background-color ease-in-out 100ms;
		font-size: 14px;
	}
	.footer-icon-container:hover {
		background-color: #eee;
		cursor: pointer;
	}
	.footer-icon-container img {
		height: 20px;
		vertical-align: middle;
	}
</style>

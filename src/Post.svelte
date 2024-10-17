<script lang="ts">
	import { goto } from '$app/navigation';

	export let authorName;
	export let authorHandle;
	export let replys;
	export let likes;
	export let shares;
	export let images = [];
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
				goto('/post');
			}}
		>
			<slot></slot>
		</div>
		{#if images.length == 1}
			<div class="images1">
				<img src={images[0]} />
			</div>
		{:else if images.length == 2}
			<div class="images2">
				<img src={images[0]} />
				<img src={images[1]} />
			</div>
		{:else if images.length == 3}
			<div class="images3">
				<div class="images3-left">
					<img src={images[0]} />
				</div>
				<div class="images3-right">
					<img src={images[1]} />
					<img src={images[2]} />
				</div>
			</div>
		{:else if images.length == 4}
			<div class="images4">
				<div class="images4-left">
					<img src={images[0]} />
					<img src={images[1]} />
				</div>
				<div class="images4-left">
					<img src={images[2]} />
					<img src={images[3]} />
				</div>
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

	.images1 img,
	.images2 img,
	.images3 img,
	.images4 img {
		object-fit: cover;
		border-radius: 12px;
		cursor: pointer;
	}
	.images1 img {
		height: 240px;
		width: 100%;
	}
	.images2 {
		display: flex;
		gap: 2px;
	}
	.images2 img {
		width: calc(50% - 1px);
		height: 240px;
	}
	.images3 {
		height: 240px;
		display: flex;
		gap: 2px;
	}
	.images3-left {
		flex: 1;
	}
	.images3-left img {
		width: 100%;
		height: 240px;
	}
	.images3-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.images3-right img {
		width: 100%;
		height: calc(119px);
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
	.images4-left img {
		height: 118px;
	}

	.footer {
		display: flex;
		justify-content: space-between;
	}
	.footer-icon-container {
		border-radius: 1000px;
		padding: 6px;
		transition: background-color ease-in-out 100ms;
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

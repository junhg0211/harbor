<script>
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import ActionListRow from '../../ActionListRow.svelte';
</script>

<Page selected="new">
	<div class="container">
		<div class="title">Write a new post</div>
		<div class="anchor-container">
			<Post>This is an anchored post!</Post>
		</div>
		<div class="textarea-container">
			<img src="/example/author.png" class="author-pfp" />
			<textarea placeholder="Hello, world!"></textarea>
		</div>
		<div class="setting">
			<ActionListRow src="/icon/image.svg">Upload Media</ActionListRow>
			<ActionListRow src="/icon/globe.svg">Accessible Range: Public</ActionListRow>
			<ActionListRow src="/icon/calendar.svg">Schedule Post</ActionListRow>
		</div>
		<div>
			<button>Post</button>
		</div>
	</div>
</Page>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.title {
		font-weight: bold;
	}

	.anchor-container {
		border-bottom: 1px solid #ddd;
		margin-bottom: 12px;
	}

	.textarea-container {
		display: flex;
		gap: 12px;
	}

	.author-pfp {
		border-radius: 1000px;
		width: 40px;
		height: 40px;
		object-fit: cover;
	}

	textarea {
		border: none;
		resize: none;
		width: 100%;
		height: 120px;
		font-size: 16px;
		outline: none;
	}

	button {
		border: none;
		border-radius: 1000px;
		padding: 12px;
		background-color: #eee;
		transition: background-color ease-in-out 100ms;
		font-size: 12px;
	}

	button:hover {
		background-color: #ddd;
	}
</style>

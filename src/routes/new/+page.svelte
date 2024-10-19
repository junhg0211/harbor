<script>
	import Page from '../../Page.svelte';
	import Post from '../../Post.svelte';
	import ActionListRow from '../../ActionListRow.svelte';

	let publicRangeSettingFloat;
	let publicRangeLabel = 'Public';
	let publicRangeIcon = '/icon/globe.svg';
	let publicRangeInput;
	let publicRangeListRow;
	let publicRangeSettingFloatBlock;
	function showAccessibleRange() {
		publicRangeSettingFloat.style.display = 'block';
		publicRangeSettingFloatBlock.style.top = `${publicRangeListRow.offsetTop}px`;
		publicRangeSettingFloatBlock.style.left = `${publicRangeListRow.offsetLeft}px`;
	}
	function setAccessibleRange(range) {
		publicRangeInput.value = range;
		publicRangeLabel = [
			'Public',
			'Login',
			'Unaccessible Specified',
			'Accessible Specified',
			'Private'
		][range];
		publicRangeIcon = [
			'/icon/globe.svg',
			'/icon/login.svg',
			'/icon/profile.svg',
			'/icon/link.svg',
			'/icon/lock.svg'
		][range];

		hideAccessibleRange();
	}
	function hideAccessibleRange() {
		publicRangeSettingFloat.style.display = 'none';
	}
</script>

<Page selected="new">
	<form action="/api/post/user/me.shtelo.org" method="POST">
		<div class="container">
			<div class="title">Write a new post</div>
			<!--
			<div class="anchor-container">
				<Post>This is an anchored post!</Post>
			</div>
      -->
			<div class="textarea-container">
				<img src="/example/author.png" class="author-pfp" />
				<textarea id="content" name="content" placeholder="Hello, world!"></textarea>
			</div>
			<div class="setting">
				<ActionListRow src="/icon/image.svg">Upload media</ActionListRow>
				<div bind:this={publicRangeListRow}>
					<ActionListRow src={publicRangeIcon} on:click={showAccessibleRange}>
						Accessible range: {publicRangeLabel}
					</ActionListRow>
				</div>
				<div
					class="setting-float"
					bind:this={publicRangeSettingFloat}
					on:click={hideAccessibleRange}
				>
					<div
						class="setting-float-container"
						bind:this={publicRangeSettingFloatBlock}
						style="top: 0; left: 0;"
					>
						<ActionListRow src="/icon/globe.svg" on:click={() => setAccessibleRange(0)}>
							Public
						</ActionListRow>
						<ActionListRow src="/icon/login.svg" on:click={() => setAccessibleRange(1)}>
							Login
						</ActionListRow>
						<ActionListRow src="/icon/profile.svg" on:click={() => setAccessibleRange(2)}>
							Unaccessible Specified
						</ActionListRow>
						<ActionListRow src="/icon/link.svg" on:click={() => setAccessibleRange(3)}>
							Accessible Specified
						</ActionListRow>
						<ActionListRow src="/icon/lock.svg" on:click={() => setAccessibleRange(4)}>
							Private
						</ActionListRow>
					</div>
					<input
						type="number"
						name="public_range"
						value={0}
						bind:this={publicRangeInput}
						style="display: none;"
					/>
				</div>
				<ActionListRow src="/icon/share.svg">Is a share post: False</ActionListRow>
				<ActionListRow src="/icon/calendar.svg">Schedule post</ActionListRow>
			</div>
			<div>
				<button>Post</button>
			</div>
		</div>
	</form>
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

	.setting-float {
		display: none;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
	}

	.setting-float-container {
		position: absolute;
		background-color: white;
		border-radius: 24px;
		box-shadow: 0 0 5px #ddd;
		padding: 8px;
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

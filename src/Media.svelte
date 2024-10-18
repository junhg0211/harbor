<script>
	export let src;
	export let place;

	let hoverDiv;
	function hoverImage() {
		hoverDiv.style.display = 'block';
	}

	function removeHoverImage() {
		hoverDiv.style.display = 'none';
	}
</script>

<img {src} class="image-in-post i{place}" on:click={hoverImage} />
<div class="hover" bind:this={hoverDiv} on:click={removeHoverImage}>
	<img {src} />
</div>

<style>
	.image-in-post {
		object-fit: cover;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color ease-in-out 100ms;
	}

	.image-in-post:hover {
		background-color: #ddd;
	}

	.i11 {
		height: 240px;
		width: 100%;
	}

	.i21,
	.i22 {
		width: calc(50% - 1px);
		height: 240px;
	}

	.i31 {
		width: 100%;
		height: 240px;
	}
	.i32,
	.i33 {
		width: 100%;
		height: calc(119px);
	}

	.i41,
	.i42,
	.i43,
	.i44 {
		height: 118px;
	}

	.hover {
		position: fixed;
		top: 0;
		left: 0;
		display: none;
		pointer: cursor;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 50%);
	}

	.hover img {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

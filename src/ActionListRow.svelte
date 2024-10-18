<script lang="ts">
	export let src;
</script>

<div class="row">
	<img {src} class="row-icon" />
	<span><slot></slot></span>
</div>

<style>
	.row {
		padding: 12px;
		border-radius: 1000px;
		transition: background-color ease-in-out 100ms;
		cursor: pointer;
	}

	.row:hover {
		background-color: #ddd;
	}

	.row-icon {
		height: 20px;
		vertical-align: middle;
	}
</style>

<script lang="ts">
	export let src;
	export let indent = 0;
</script>

<div class="row" on:click>
	<img {src} style="padding-left: calc(24px * {indent});" class="row-icon" />
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

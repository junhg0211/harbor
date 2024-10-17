<script>
	import { goto } from '$app/navigation';

	export let icon;
	export let label;
	export let href;
	export let selected = false;
</script>

<div class="navigation-row {selected && 'navigation-row-selected'}" on:click={goto(href)}>
	<img src={icon} />
	<span>{label}</span>
</div>

<style>
	.navigation-row {
		padding: 16px;
		margin-bottom: 12px;
		border-radius: 1000px;
		transition: background-color ease-in-out 100ms;
	}

	.navigation-row-selected {
		background-color: #eee;
	}

	.navigation-row img {
		width: 24px;
		vertical-align: middle;
		padding-right: 12px;
	}

	.navigation-row:hover {
		background-color: #ddd;
		cursor: pointer;
	}
</style>

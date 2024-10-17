<script>
	import { goto } from '$app/navigation';

	export let href = '/';

	function onClick() {
		goto(href);
	}
</script>

<span on:click={onClick}>
	<slot></slot>
</span>

<style>
	span {
		color: #00a0e9;
	}

	span:hover {
		text-decoration: underline;
	}
</style>

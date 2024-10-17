<script lang="ts">
	import NavigationRow from './NavigationRow.svelte';

	export let selected;
</script>

<div class="navigation">
	<NavigationRow icon="/icon.svg" label="Home" href="/home" selected={selected === 'home'} />
	<NavigationRow
		icon="/icon/profile.svg"
		label="Profile"
		href="/profile"
		selected={selected === 'profile'}
	/>
	<NavigationRow
		icon="/icon/settings.svg"
		label="Settings"
		href="/settings"
		selected={selected === 'settings'}
	/>
	<NavigationRow
		icon="/icon/reply.svg"
		label="New Post"
		href="/new"
		selected={selected === 'new'}
	/>
</div>

<style>
	.navigation {
		padding-top: 36px;
		padding-left: 36px;
		min-width: 240px;
	}

	@media (max-width: 768px) {
		.navigation {
			display: none;
		}
	}
</style>

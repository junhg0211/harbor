<script lang="ts">
	import Page from '../../Page.svelte';
</script>

<Page selected="login">
	<form class="container">
		<div class="title">Login</div>
		<div class="form-row">
			<div class="form-label">Handle</div>
			<input type="text" name="handle" placeholder="example.harbor.la" />
		</div>
		<div class="form-row">
			<div class="form-label">Password</div>
			<input type="password" name="password" placeholder="password" />
		</div>
		<div class="form-row">
			<button>Login</button>
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

	.form-label {
		margin-bottom: 8px;
	}

	input {
		width: calc(100% - 24px);
		padding: 12px;
		border: none;
		background-color: #eee;
		border-radius: 1000px;
		outline: none;
		font-size: 12px;
	}

	button {
		padding: 12px;
		background-color: #eee;
		outline: none;
		border: none;
		border-radius: 1000px;
		font-size: 12px;
	}
</style>

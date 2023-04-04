<script>
	export let form;
</script>

<div class="h-screen flex items-center justify-center">
	<form class="flex w-96 flex-col gap-4" method="POST">
		<p class="font-bold text-3xl">PocketBase</p>
		<input
			name="user"
			type="text"
			placeholder="Username / Email"
			class="input w-full input-bordered"
		/>
		<input name="password" type="text" placeholder="Password" class="input w-full input-bordered" />
		<div>
			<button class="btn w-full">Log in</button>
			{#if form?.message}
				<p class="text-primary text-xs">{form.message}</p>
			{/if}
		</div>
		<a href="/signup" class="self-end">Sign Up</a>
	</form>
</div>

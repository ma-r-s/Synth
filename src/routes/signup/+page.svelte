<script>
	export let form;
</script>

<div class="h-screen flex flex-col items-center justify-center gap-10">
	<form class="flex w-96 flex-col gap-4" method="POST">
		<p class="font-bold text-3xl">PocketBase</p>
		<div>
			<input
				name="username"
				type="text"
				placeholder="Username"
				class="input w-full input-bordered"
			/>
			{#if form?.username}
				<p class="text-primary text-xs">{form.username.message}</p>
			{/if}
		</div>
		<div>
			<input name="email" type="text" placeholder="Email" class="input w-full input-bordered" />
			{#if form?.email}
				<p class="text-primary text-xs">{form.email.message}</p>
			{/if}
		</div>
		<input name="password" type="text" placeholder="Password" class="input w-full input-bordered" />
		<input
			name="passwordConfirm"
			type="text"
			placeholder="Confirm Password"
			class="input w-full input-bordered"
		/>
		<button class="btn">Sign Up</button>
		<a href="/" class="self-end">Log In</a>
	</form>
</div>

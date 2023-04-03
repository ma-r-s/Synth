<script>
	export let form;
</script>

<div class="h-screen flex flex-col items-center justify-center gap-10">
	<form class="flex w-96 flex-col gap-4" method="POST">
		<p class="font-bold text-3xl">PocketBase</p>
		<input name="username" type="text" placeholder="Username" class="input w-full input-bordered" />
		<input name="email" type="text" placeholder="Email" class="input w-full input-bordered" />
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
	{#if form?.email}
		<div class="alert alert-error shadow-lg w-5/6 ">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
				<span>{form.email.message}</span>
			</div>
		</div>
	{/if}
	{#if form?.username}
		<div class="alert alert-warning shadow-lg w-5/6 ">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
				<span>{form.username.message}</span>
			</div>
		</div>
	{/if}
</div>

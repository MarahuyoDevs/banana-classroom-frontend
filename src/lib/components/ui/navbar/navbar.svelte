<script lang="ts">
	import Button from '../button/button.svelte';

	export let isLoggedIn: boolean = false;
</script>

<nav class="flex items-center justify-between gap-5 border p-4 px-8">
	<Button variant="link" href={isLoggedIn ? '/home' : '/'} class="px-0 text-2xl">
		Banana Classroom
	</Button>
	<ul class="flex gap-5">
		{#if isLoggedIn}
			<li>
				<Button on:click={() => window.location.href = "/?signout=true"} variant="outline">Sign Out</Button>
			</li>
		{:else}
			<li>
				<Button href="/signin" variant="default">Sign In</Button>
			</li>
			<li>
				<Button href="/signup" variant="outline">Sign Up</Button>
			</li>
		{/if}
	</ul>
</nav>

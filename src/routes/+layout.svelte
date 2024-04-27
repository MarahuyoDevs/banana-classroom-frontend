<script lang="ts">
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import type { LayoutData } from './$types';
	import Sidebar from '$lib/components/ui/sidebar/sidebar.svelte';

	export let data: LayoutData;
</script>

<div>
	<Navbar isLoggedIn={data.isLoggedIn} userType={data.userType} />
	<Toaster />
	<div class="flex flex-row p-4 md:px-8">
		{#if data.isLoggedIn}
			<Sidebar userType={data.userType || 'student'} />
		{/if}
		<div
			class={`${data.isLoggedIn ? 'w-full border md:w-3/4 md:rounded-r-md' : 'w-full'}  p-4 px-8`}
		>
			<slot />
		</div>
	</div>
</div>

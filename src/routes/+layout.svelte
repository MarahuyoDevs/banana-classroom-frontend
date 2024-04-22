<script lang="ts">
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import type { LayoutData } from './$types';
	import Sidebar from '$lib/components/ui/sidebar/sidebar.svelte';

	export let data: LayoutData;
</script>

<div>
	<Navbar isLoggedIn={data.isLoggedIn} />
	<Toaster />
	<div class="flex flex-row p-4 px-8">
		{#if data.isLoggedIn}
			<Sidebar userType="instructor" />
		{/if}
		<div class={`${data.isLoggedIn ? 'w-3/4 rounded-r-md border' : 'w-full'}  p-4 px-8`}>
			<slot />
		</div>
	</div>
</div>

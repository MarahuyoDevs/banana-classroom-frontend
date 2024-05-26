<script lang="ts">
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import type { LayoutData } from './$types';
	import Sidebar from '$lib/components/ui/sidebar/sidebar.svelte';

	export let data: LayoutData;
</script>

<!--
<div class="font-fredoka">
	<Navbar isLoggedIn={data.isLoggedIn} userType={data.userType} />
	<Toaster />
	<div class="flex flex-row">
		{#if data.isLoggedIn}
			<Sidebar userType={data.userType || 'student'} />
		{/if}
		<div class={`${data.isLoggedIn ? 'w-full  md:w-3/4 md:rounded-r-md md:border' : 'w-full'}`}>
			<slot />
		</div>
	</div>
</div>
-->
<div class="font-fredoka">
	<Toaster />
	{#if data.isLoggedIn}
		<div class="flex flex-row">
			<Sidebar userType={data.userType || 'student'} userData={data.userData} />
			<div class="w-full bg-gradient-to-br from-yellow-400 to-red-400 p-8">
				<slot />
			</div>
		</div>
	{:else}
		<Navbar isLoggedIn={data.isLoggedIn} userType={data.userType} />
		<slot />
	{/if}
</div>

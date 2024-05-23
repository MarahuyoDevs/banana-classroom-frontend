<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/hyper/card/card.svelte';
	import Button from '$lib/components/hyper/button/button.svelte';
</script>

<main class="bg-transparent">
	<section
		id="home"
		class="grid min-h-screen grid-cols-1 items-center justify-items-center bg-gradient-to-br from-yellow-400 to-red-400 px-12 md:grid-cols-2 md:p-24"
	>
		<div>
			<h1 class="border-none">A place that you will learn</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nulla officia quis,
				saepe nesciunt, aut, omnis reprehenderit necessitatibus temporibus quae libero velit? Quo
				quas corporis dolores voluptatem earum expedita molestias.
			</p>
			<div class="flex flex-row gap-3 pt-4">
				<Button>Get Started</Button>
				<Button>About us</Button>
			</div>
		</div>
		<img src="/banana-character.gif" class="hidden md:block" alt="A banana that is dancing" />
	</section>
	<section
		class="min-h-screen border-white bg-transparent/40 bg-gradient-to-tr from-yellow-400 to-red-400 px-12 md:p-24"
	>
		<h2 class="border-none">Features:</h2>
		<div class="grid h-full grid-cols-12 gap-5">
			<Card class="col-span-full md:col-span-12">
				<svelte:fragment slot="header">Feature 1</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 2</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 3</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 4</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-8">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
		</div>
	</section>
	<section
		class="min-h-screen bg-transparent/40 bg-gradient-to-br from-yellow-400 to-red-400 px-12 md:p-24"
	>
		<h2 class="border-none">Development Roadmap:</h2>
		<div class="grid grid-cols-12 gap-5">
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
			<Card class="col-span-full md:col-span-4">
				<svelte:fragment slot="header">Feature 5</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque numquam hic,
					dignissimos impedit qui quam magni asperiores quae beatae commodi libero, cum saepe rem
					suscipit molestiae. Quas, porro ad?
				</svelte:fragment>
			</Card>
		</div>
	</section>
</main>

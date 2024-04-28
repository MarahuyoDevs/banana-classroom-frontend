<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your Classrooms</h1>
<div class="grid gap-5 py-4 md:grid-cols-2">
	{#await data}
		loading....
	{:then}
		{#each data.classrooms as classroom}
			<Card.Root>
				<Card.Header>
					<Card.Title>{classroom.name.S}</Card.Title>
					<Card.Description>{classroom.instructor.S}</Card.Description>
				</Card.Header>
				<Card.Content>{classroom.description.S}</Card.Content>
				<Card.Footer class="w-full">
					<Button href={`/classrooms/${classroom.id.S}`} class="w-full">Visit</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	{/await}
</div>

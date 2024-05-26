<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import CartoonCard from '$lib/components/hyper/card/card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your Classrooms</h1>
<div class="grid min-h-screen gap-5 py-4 pb-32 md:grid-cols-2">
	{#each data?.classrooms || [] as classroom}
		<CartoonCard>
			<div slot="header">
				<h4>{classroom.name.S || 'No name'}</h4>
			</div>
			<div slot="content">
				<h4>{classroom.name.S || 'No name'}</h4>
				<p>{classroom.description.S || 'No description provided'}</p>
				<Button href={`/classrooms/${classroom.id.S}`} class="w-full">Visit</Button>
			</div>
		</CartoonCard>
		<!--
		<Card.Root>
			<Card.Header>
				<Card.Title>{classroom.name.S || 'No name'}</Card.Title>
				<Card.Description>{classroom.instructor.S}</Card.Description>
			</Card.Header>
			<Card.Content>{classroom.description.S}</Card.Content>
			<Card.Footer class="w-full">
				<Button href={`/classrooms/${classroom.id.S}`} class="w-full">Visit</Button>
			</Card.Footer>
		</Card.Root>
		-->
	{/each}
</div>

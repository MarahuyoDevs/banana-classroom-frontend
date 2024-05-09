<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	import { collect } from 'collect.js';
	export let data: PageData;
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your quiz results</h1>
<div class="grid gap-5 py-4 md:grid-cols-2">
	{#each data?.results || [] as result}
		{#each data.quizzes || [] as quiz}
			{#if quiz.id === result.quizID.S}
				<Card.Root>
					<Card.Header>
						<Card.Title>Result of - {quiz.data.name?.S}</Card.Title>
						<Card.Description>Score - {result.score.S}</Card.Description>
					</Card.Header>
					<Card.Content>{quiz?.data.description?.S}</Card.Content>
					<Card.Footer class="w-full">
						<Button href="/results/{result?.id?.S}" class="w-full">Visit</Button>
					</Card.Footer>
				</Card.Root>
			{/if}
		{/each}
	{/each}
</div>

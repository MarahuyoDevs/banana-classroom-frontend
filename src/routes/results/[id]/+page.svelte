<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<h2>Results of - {data.quiz?.name?.S}</h2>
	<span>Id: <i class="small">{$page.params.id}</i></span>
	<span class="lead">Your score: {data?.result?.score?.S}</span>
	<p>Submitted by: {data?.result?.userEmail?.S}</p>
	<div class="flex flex-col gap-5 py-4">
		{#each data?.result?.answers?.L || [] as answer}
			<Card.Root>
				<Card.Header>
					<Card.Title>Question: #{answer?.M?.index?.S}</Card.Title>
					<Card.Description>Your answer: {answer?.M?.answer?.S}</Card.Description>
				</Card.Header>
				<Card.Content>Correct Answer: {answer?.M?.correctAnswer?.S}</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>

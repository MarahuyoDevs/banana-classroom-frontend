<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Description } from 'formsnap';
	export let data: PageData;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			{data.quiz?.name.S}
		</Card.Title>
		<Card.Description>
			Quiz of - <span class="font-bold">{data.classroom?.name?.S}</span>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>
			{data.quiz?.description.S}
		</p>
	</Card.Content>
	<Card.Footer class="flex-row gap-5">
		{#if data.user.role.S === 'student'}
			<Button href="/quiz/start/${data.quiz?.id.S}">Start Quiz</Button>
		{/if}
		<Button href="/home" variant="outline">Return Home</Button>
	</Card.Footer>
</Card.Root>

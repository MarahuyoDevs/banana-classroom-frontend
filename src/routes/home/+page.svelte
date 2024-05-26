<script lang="ts">
	import CartoonButton from '$lib/components/hyper/button/cartoon_button.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CartoonCard from '$lib/components/hyper/card/card.svelte';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	export let data: PageData;
</script>

<div class="grid grid-cols-1 gap-5">
	<h1 class="border-none">Home page</h1>
	{#if data.userType === 'student'}
		<div>
			<h2 class="border-none">Let’s get started by joining a classroom!</h2>
			<a href="/classrooms/join">
				<CartoonButton>Join a classroom</CartoonButton>
			</a>
		</div>
	{/if}
	<div>
		<h2 class="border-none">Your current classrooms</h2>
		<div class="grid grid-cols-1 gap-5 py-8 md:grid-cols-3">
			{#each data?.classrooms || [] as classroom}
				<CartoonCard>
					<div slot="header">
						<span>{classroom?.name?.S || 'No Title'}</span>
					</div>
					<div slot="content">
						<p>{classroom?.description?.S}</p>
						<Button class="w-full" href="/classrooms/{classroom?.id.S}">Visit Now</Button>
					</div>
				</CartoonCard>
			{/each}
		</div>
		<a href="/classrooms">
			<CartoonButton>View Classrooms</CartoonButton>
		</a>
	</div>
	{#if data.userType === 'student'}
		<div>
			<h2 class="border-none">Your quiz results</h2>
			{#each data?.results || [] as result}
				{#each data.quizzesResult || [] as quiz}
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
	{/if}
</div>

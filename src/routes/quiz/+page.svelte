<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	import CartoonCard from '$lib/components/hyper/card/card.svelte';
	export let data: PageData;
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your quizzes</h1>
<div class="grid min-h-screen gap-5 py-4 pb-32 md:grid-cols-2">
	{#each data?.quizzes || [] as quiz}
		<CartoonCard>
			<div slot="header">
				<h4>{quiz.name.S || 'No name'}</h4>
			</div>
			<div slot="content">
				<h4>{quiz.name.S || 'No name'}</h4>
				<p>{quiz.description.S || 'No description provided'}</p>
				<Button href={`/quiz/${quiz.id.S}`} class="w-full">Visit</Button>
			</div>
		</CartoonCard>
	{/each}
</div>

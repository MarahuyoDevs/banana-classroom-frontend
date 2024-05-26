<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Description } from 'formsnap';
	export let data: PageData;
</script>

<h1 class="border-b-2 border-white">{data.quiz?.name?.S?.toUpperCase()}</h1>
<span>Quiz of - <span class="font-bold">{data.classroom?.name?.S}</span></span>
<div class="pt-4">
	<span class="lead text-white">Description: </span>
	<p class="!mt-0 pb-4">
		{data.quiz?.description?.S}
	</p>
</div>
{#if data?.user?.role?.S === 'student' && Array.from(new Set(data.results?.map((value) => value.quizID.S !== data.quiz?.id?.S))).every((val) => val)}
	<Button href="/quiz/start/{data.quiz?.id?.S}">Start Quiz</Button>
{/if}
<Button href="/home" variant="outline">Return Home</Button>

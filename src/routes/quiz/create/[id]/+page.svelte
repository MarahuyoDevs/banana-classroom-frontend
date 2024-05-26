<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { type Question as QuestionType } from '$lib/database/types';
	import { v4 as uuidv4 } from 'uuid';
	import Question from '$lib/components/ui/question/question.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';

	let questionsCounter: string[] = [];
	let questionCounterSingleNumber: number = 0;

	const addQuestion = () => {
		questionsCounter.push(questionType);
		questionCounterSingleNumber++;
	};

	let questionType: string = 'identification';
	let checked: boolean;
</script>

<h1 class="scroll-m-20 py-8 text-4xl font-extrabold tracking-tight lg:text-5xl">Create a quiz</h1>
<form class="flex flex-col gap-5" method="POST" action="">
	<div class="grid w-full items-center gap-1.5">
		<Label for="name">Title</Label>
		<Input id="name" name="name" placeholder="Enter the title of the quiz" />
	</div>
	<div class="grid w-full items-center gap-1.5">
		<Label for="description">Description</Label>
		<Textarea id="description" name="description" placeholder="Enter the description of the quiz"
		></Textarea>
	</div>
	<div class="flex w-full flex-row items-center gap-1.5">
		<Label for="checkDuration">Allow Duration</Label>
		<Checkbox id="checkDuration" bind:checked />
	</div>
	{#if checked}
		<div class="grid w-1/4 items-center gap-1.5">
			<Label for="duration">Duration</Label>
			<Input id="duration" name="duration" type="number" placeholder="Enter minutes" />
		</div>
	{/if}
	<div class="flex flex-col gap-5">
		<Button on:click={() => addQuestion()} class="max-w-sm" type="button" variant="secondary">
			Create a question
		</Button>
	</div>
	{#each { length: questionCounterSingleNumber } as _}
		<Question questionIndex={questionsCounter.length} />
	{/each}
	<div class="flex flex-row gap-3">
		<Button type="submit">Create quiz</Button>
		<Button href="/home" variant="outline">Return home</Button>
	</div>
</form>

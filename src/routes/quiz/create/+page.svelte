<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { type Question as QuestionType } from '$lib/database/types';
	import { v4 as uuidv4 } from 'uuid';
	import Question from '$lib/components/ui/question/question.svelte';
	import * as Select from '$lib/components/ui/select';

	let questionsCounter: string[] = [];
	let questionCounterSingleNumber: number = 0;

	const addQuestion = () => {
		questionsCounter.push(questionType);
		questionCounterSingleNumber++;
	};

	let questionType: string = 'identification';
	$: {
		console.log(questionType);
	}
	const switchChoices = (e: HTMLFormElement) => {
		console.log(e.target);
	};
</script>

<h1 class="scroll-m-20 py-8 text-4xl font-extrabold tracking-tight lg:text-5xl">Create a quiz</h1>
<form class="flex flex-col gap-5" action="">
	<div class="grid w-full items-center gap-1.5">
		<Label for="email">Title</Label>
		<Input name="name" placeholder="Enter the title of the quiz" />
	</div>
	<div class="grid w-full items-center gap-1.5">
		<Label for="email">Description</Label>
		<Textarea name="description" placeholder="Enter the description of the quiz"></Textarea>
	</div>
	<div class="flex flex-col gap-5">
		<Select.Root
			onSelectedChange={(v) => {
				questionType = v?.value || 'identification';
			}}
		>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Select a type" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Type of choices</Select.Label>
					<Select.Item value={'identification'} label={'identification'}>
						Identification
					</Select.Item>
					<Select.Item value={'multipleChoice'} label={'multiple choice'}>
						Multiple Choice
					</Select.Item>
				</Select.Group>
			</Select.Content>
			<Select.Input bind:value={questionType} name="choiceSelection" />
		</Select.Root>
		<Button on:click={() => addQuestion()} class="max-w-sm" type="button" variant="secondary">
			Create a question
		</Button>
	</div>
	{#each { length: questionCounterSingleNumber } as _}
		<Question
			questionType={questionsCounter[questionsCounter.length - 1]}
			questionIndex={questionsCounter.length}
		/>
	{/each}
	<div class="flex flex-row gap-3">
		<Button>Create quiz</Button>
		<Button variant="outline">Return home</Button>
	</div>
</form>

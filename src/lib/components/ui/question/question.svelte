<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label/index.js';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '../button/button.svelte';
	export let questionType: string;
	import * as Card from '../card';
	export let questionIndex: number;
	let choiceCounter: number[] = [];
	let choiceCounterSingleNumber = 0;

	function addChoice() {
		choiceCounter.push(1);
		choiceCounterSingleNumber = choiceCounter.length;
	}
</script>

<Card.Root>
	<Card.Header class="gap-5">
		<Card.Title>
			Question {questionIndex}
		</Card.Title>
		<Card.Description>
			<Textarea name="description" placeholder="Enter a question"></Textarea>
		</Card.Description>
	</Card.Header>
	{#if questionType === 'multipleChoice'}
		<Card.Content class="flex-col">
			<Button on:click={addChoice}>Add Choice</Button>
			<div class="flex flex-col gap-5 py-4">
				{#each { length: choiceCounterSingleNumber } as _}
					<div class="flex w-full items-center gap-2">
						<Label for="email">{choiceCounter.length}</Label>
						<Input name="name" placeholder="Enter the title of the quiz" />
					</div>
				{/each}
			</div>
		</Card.Content>
	{/if}
	<Card.Footer>
		<div class="flex w-full flex-col gap-5">
			<Label for="email">Answer</Label>
			<Input name="name" placeholder="Enter the title of the quiz" />
		</div>
	</Card.Footer>
</Card.Root>

<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label/index.js';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '../button/button.svelte';
	import * as Card from '../card';
	export let questionIndex: number;
	let choiceCounter: number[] = [];
	let choiceCounterSingleNumber = 0;
	import * as Select from '$lib/components/ui/select';

	let questionType: string;

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
			<Textarea name={`questionDescription`} placeholder="Enter a question"></Textarea>
		</Card.Description>
	</Card.Header>

	<Card.Content class="flex flex-col gap-5">
		<Select.Root onSelectedChange={(v) => (questionType = v?.value || 'identification')}>
			<Select.Trigger class="max-w-sm">
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
			<Select.Input bind:value={questionType} name={`choiceSelection`} />
		</Select.Root>
		{#if questionType === 'multipleChoice'}
			<Button class="max-w-sm" on:click={addChoice}>Add Choice</Button>
			<div class="flex flex-col gap-5 py-4">
				{#each { length: choiceCounterSingleNumber } as _}
					<div class="flex w-full items-center gap-2">
						<Label for={`questionChoice${questionIndex}`}>{choiceCounter.length}</Label>
						<Input
							id={`questionChoice${questionIndex}`}
							name={`questionChoice${questionIndex}`}
							placeholder="Enter the title of the quiz"
						/>
					</div>
				{/each}
			</div>
		{/if}
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full flex-col gap-5">
			<Label for={`questionAnswer`}>Answer</Label>
			<Input
				id={`questionAnswer`}
				name={`questionAnswer`}
				placeholder="Enter the title of the quiz"
			/>
		</div>
	</Card.Footer>
</Card.Root>

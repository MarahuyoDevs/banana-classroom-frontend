<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.quiz.name.S}</title>
	<meta name="description" content={data.quiz.description.S} />
</svelte:head>

<h4>{data.quiz.name.S}</h4>
<p class="muted">{data.quiz.description.S}</p>
<form action="" method="POST">
	<div class="space-y-5 py-4">
		{#each data.quiz.questions.L as question}
			<Card.Root>
				<Card.Header>
					<Card.Title>Question {question.M.index.S}</Card.Title>
					<Card.Description>{question.M.text.S}</Card.Description>
				</Card.Header>
				{#if question.M.type.S === 'multipleChoice'}
					<Card.Content>
						<RadioGroup.Root value="">
							{#each question.M.options.L as choice}
								<div class="flex items-center space-x-2">
									<RadioGroup.Item value={choice.S} />
									<Label for="r1">{choice.S}</Label>
								</div>
							{/each}
							<RadioGroup.Input name={question.M.index.S} />
						</RadioGroup.Root>
					</Card.Content>
				{:else if question.M.type.S === 'identification'}
					<Card.Footer>
						<Input name={question.M.index.S} placeholder="enter your answer" />
					</Card.Footer>
				{/if}
			</Card.Root>
		{/each}
	</div>
	<div>
		<Button type="submit" variant="default">Submit</Button>
	</div>
</form>

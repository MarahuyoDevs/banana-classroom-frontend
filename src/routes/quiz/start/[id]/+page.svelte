<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.quiz.name.S}</title>
	<meta name="description" content={data.quiz.description.S} />
</svelte:head>

<h1>{data.quiz.name.S}</h1>
<p>{data.quiz.description.S}</p>

{#each data.quiz.questions.L as question}
	<Card.Root>
		<Card.Header>
			<Card.Title>Question {question.M.index.S}</Card.Title>
			<Card.Description>{question.M.text.S}</Card.Description>
		</Card.Header>
		{#if question.M.type.S === 'multipleChoice'}
			<Card.Content>
				<RadioGroup.Root value="comfortable">
					{#each question.M.options.L as choice}
						<div class="flex items-center space-x-2">
							<RadioGroup.Item value={choice.S} />
							<Label for="r1">{choice.S}</Label>
						</div>
					{/each}
				</RadioGroup.Root>
			</Card.Content>
		{:else if question.M.type.S === 'identification'}
        <Card.Footer>
            <Input placeholder="enter your answer" />
        </Card.Footer>
        {/if}
	</Card.Root>
{/each}

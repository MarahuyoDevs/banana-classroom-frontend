<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import { onDestroy, onMount } from 'svelte';
	export let data: PageData;
	import { timer, time, isRunning, isComplete } from './timer';

	let form: HTMLFormElement | null;
	let submitted: boolean;

	onMount(() => {
		form = <HTMLFormElement>document.getElementById('quizForm');
		if (data?.quiz?.duration?.N) {
			timer(parseInt(data?.quiz?.duration?.N) * 60).start();
		}
	});

	$: {
		if ($time == '00:00') {
			console.log('times up');
			form?.submit();
		}
	}

	onDestroy(() => {});
</script>

<svelte:head>
	<title>{data?.quiz?.name?.S || 'undefined quiz'}</title>
	<meta name="description" content={data?.quiz?.description?.S} />
</svelte:head>

<h4>{data?.quiz?.name?.S}</h4>
<p class="muted">{data?.quiz?.description?.S}</p>
{#if data?.quiz?.duration?.N}
	<span>Time left: {$time}</span>
{/if}
<form id="quizForm" action="" method="POST">
	<div class="space-y-5 py-4">
		{#each data?.quiz?.questions?.L || [] as question}
			<Card.Root>
				<Card.Header>
					<Card.Title>Question {question?.M?.index?.S}</Card.Title>
					<Card.Description>{question?.M?.text?.S}</Card.Description>
				</Card.Header>
				{#if question?.M?.type?.S === 'multipleChoice'}
					<Card.Content>
						<RadioGroup.Root value="">
							{#each question?.M?.options?.L || [] as choice}
								<div class="flex items-center space-x-2">
									<RadioGroup.Item value={choice?.S || ''} />
									<Label for="r1">{choice?.S || ''}</Label>
								</div>
							{/each}
							<RadioGroup.Input name={question.M.index.S} />
						</RadioGroup.Root>
					</Card.Content>
				{:else if question?.M?.type?.S === 'identification'}
					<Card.Footer>
						<Input name={question?.M?.index?.S} placeholder="enter your answer" />
					</Card.Footer>
				{/if}
			</Card.Root>
		{/each}
	</div>
	<div>
		<Button type="submit" variant="default">Submit</Button>
	</div>
</form>

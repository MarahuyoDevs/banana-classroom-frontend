<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card.Root class="border-none md:border">
	<Card.Header>
		<Card.Title class="scroll-m-20 py-4 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{data.classroom.name?.S}
		</Card.Title>
		<Card.Description>{data.classroom.instructor?.S}</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-5">
		<p>{data.classroom.description?.S}</p>
		<Tabs.Root>
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="students">Students</Tabs.Trigger>
				<Tabs.Trigger value="quiz">Quiz</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="students">
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each data?.students as student}
						<Card.Root>
							<Card.Header>
								<Card.Title>{student?.name.S}</Card.Title>
								<Card.Description>{student?.email.S}</Card.Description>
							</Card.Header>
							<Card.Content></Card.Content>
							<Card.Footer></Card.Footer>
						</Card.Root>
					{/each}
				</div>
			</Tabs.Content>
			<Tabs.Content value="quiz">
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each data?.quizzes as quiz}
						<Card.Root>
							<Card.Header>
								<Card.Title>
									{quiz.name.S}
								</Card.Title>
								<Card.Description>
									{data.classroom.name.S}
								</Card.Description>
							</Card.Header>
							<Card.Content>{quiz.description.S}</Card.Content>
							<Card.Footer>
								<Button href="/quiz/{quiz.id.S}">View Quiz</Button>
							</Card.Footer>
						</Card.Root>
					{/each}
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</Card.Content>
	{#if data.user.role?.S === 'instructor'}
		<Card.Footer>
			<Button href="/quiz/create/{data.classroom.id?.S}" variant="secondary">Create a quiz</Button>
		</Card.Footer>
	{/if}
</Card.Root>

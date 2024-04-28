<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="scroll-m-20 py-4 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl"
			>{data.classroom.name}</Card.Title
		>
		<Card.Description>{data.classroom.instructor}</Card.Description>
	</Card.Header>
	<Card.Content>
		<Tabs.Root value="account" class="w-[400px]">
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="account">Students</Tabs.Trigger>
				<Tabs.Trigger value="password">Quiz</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
	</Card.Content>
	{#if data.user.role === 'instructor'}
		<Card.Footer>
			<Button href="/quiz/create/{data.classroom.id}" variant="secondary">Create a quiz</Button>
		</Card.Footer>
	{/if}
</Card.Root>

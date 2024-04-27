<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your Classrooms</h1>
<div class="grid gap-5 py-4 md:grid-cols-2">
	{#each { length: 20 } as _}
		<Card.Root>
			<Card.Header>
				<Card.Title>Title Placeholder</Card.Title>
				<Card.Description>Instructor Placeholder</Card.Description>
			</Card.Header>
			<Card.Content>Card Description</Card.Content>
			<Card.Footer class="w-full">
				<Button class="w-full">Visit</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { ClassroomSchema } from '$lib/database/schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Reload } from 'svelte-radix';

	export let data: { form: SuperValidated<Infer<typeof ClassroomSchema>> };
	let isSubmitting: boolean = false;
	const form = superForm(data.form, {
		validators: zodClient(ClassroomSchema),
		dataType: 'form',
		resetForm: false
	});

	const { form: formData, enhance } = form;
</script>

<form class="flex w-full flex-col gap-5" method="POST" use:enhance>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Create Classroom</h1>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<div class="grid w-full items-center gap-3">
				<Label>Title</Label>
				<Input
					{...attrs}
					bind:value={$formData.name}
					class="w-full"
					type="text"
					placeholder="Title of the classroom"
				/>
			</div>
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<div class="grid w-full items-center gap-3">
				<Label>Description</Label>
				<Textarea
					{...attrs}
					bind:value={$formData.description}
					class="w-full"
					placeholder="Title of the classroom"
				></Textarea>
			</div>
		</Form.Control>
	</Form.Field>
	<div class="flex w-full max-w-md items-center gap-3">
		{#if isSubmitting}
			<Button type="button" disabled class="w-full">
				<Reload class="mr-2 h-4 w-4 animate-spin" />
				Please wait
			</Button>
		{:else}
			<Button on:click={() => !isSubmitting} type="submit">Create classroom</Button>
		{/if}
		<Button href="/home" variant="outline">Return to home</Button>
	</div>
</form>

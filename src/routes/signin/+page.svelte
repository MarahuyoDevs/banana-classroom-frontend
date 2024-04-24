<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import Reload from 'svelte-radix/Reload.svelte';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data: { form: SuperValidated<Infer<FormSchema>> };
	let signInAs: string = 'student';
	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		dataType: 'form'
	});
	$: {
		page.subscribe((value) => {
			if (value.status >= 400) {
				console.log(value);
				formLoading = false;
				toast.error(value.form.message.heading, {
					description: value.form.message.message,
					action: {
						label: 'Close',
						onClick: () => console.log('close the window')
					}
				});
			}
		});
	}
	const { form: formData, enhance, errors } = form;
	let formLoading = false;
</script>

<main class="flex h-screen">
	<aside
		class="hidden h-full items-center justify-center rounded-md border md:flex md:w-1/2 md:rounded-l-md"
	>
		<img src="/banana-character.gif" alt="" />
	</aside>
	<form
		class="flex h-full w-full flex-col items-center justify-center gap-3 rounded-md border p-4 md:w-1/2 md:rounded-r-md"
		method="POST"
		use:enhance
		on:submit={() => (formLoading = true)}
	>
		<h1>Welcome</h1>
		<div class="flex w-full gap-5">
			<input type="text" name="userType" bind:value={signInAs} class="hidden" />
			<Button
				class="w-full"
				variant={signInAs === 'student' ? 'default' : 'outline'}
				on:click={() => (signInAs = 'student')}>Student</Button
			>
			<Button
				class="w-full"
				variant={signInAs === 'instructor' ? 'default' : 'outline'}
				on:click={() => (signInAs = 'instructor')}>Instructor</Button
			>
		</div>
		<Form.Field {form} name="email" class="w-full">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} type="email" />
			</Form.Control>
		</Form.Field>
		<Form.Field {form} name="password" class="w-full">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} bind:value={$formData.password} type="password" />
			</Form.Control>
		</Form.Field>
		{#if !formLoading}
			<Form.Button class="w-full">Sign in</Form.Button>
		{:else}
			<Button type="button" disabled class="w-full">
				<Reload class="mr-2 h-4 w-4 animate-spin" />
				Please wait
			</Button>
		{/if}

		<Button href="/signup" variant="link">Don't have an account?</Button>
	</form>
</main>

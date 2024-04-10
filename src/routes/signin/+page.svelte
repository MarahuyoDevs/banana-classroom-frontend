<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
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
			if(value.status === 400){
				toast.error(value.form.message)
			}
		});
	}
	const { form: formData, enhance, errors } = form;
</script>

<main class="flex h-screen">
	<aside class="hidden h-full items-center justify-center border sm:flex sm:w-1/2">
		<img src="/banana-character.gif" alt="" />
	</aside>
	<form
		class="flex h-full w-full flex-col items-center justify-center gap-3 border p-4 sm:w-1/2"
		method="POST"
		use:enhance
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
		<Form.Button class="w-full">Sign in</Form.Button>
		<Button href="/signup" variant="link">Don't have an account?</Button>
	</form>
</main>

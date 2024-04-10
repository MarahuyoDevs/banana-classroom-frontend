<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	export let data: { form: SuperValidated<Infer<FormSchema>> };
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { toast } from 'svelte-sonner';
	let signInAs: string = 'student';
	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		dataType: 'form',
		resetForm: false
	});
	const { form: formData, enhance } = form;
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
		<Form.Field {form} name="name" class="w-full">
			<Form.Control let:attrs>
				<Form.Label>Name</Form.Label>
				<Input {...attrs} bind:value={$formData.name} type="name" />
			</Form.Control>
		</Form.Field>
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
		<Form.Field {form} name="passwordConfirm" class="w-full">
			<Form.Control let:attrs>
				<Form.Label>Confirm password</Form.Label>
				<Input {...attrs} bind:value={$formData.passwordConfirm} type="password" />
			</Form.Control>
		</Form.Field>
		<Form.Field {form} name="passwordConfirm" class="w-full">
			<Form.Control let:attrs>
				<div class="flex items-center gap-3">
					<Checkbox {...attrs} />
					<Form.Label>Accept terms and conditions</Form.Label>
				</div>
			</Form.Control>
		</Form.Field>
		<Form.Button class="w-full">Sign up</Form.Button>
		<Button href="/signin" variant="link">Already have an account?</Button>
	</form>
</main>

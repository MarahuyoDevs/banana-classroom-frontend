<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CartoonButton from '$lib/components/hyper/button/cartoon_button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<form class="flex min-h-screen flex-col gap-5" method="POST">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Join a classroom</h1>
	<div class="grid w-full items-center gap-1.5">
		<Label for="classroomID">Classroom ID</Label>
		<Input name="classroomID" type="text" id="classroomID" placeholder="classroom id" />
	</div>
	<CartoonButton class="w-fit" type="submit">Join classroom</CartoonButton>
</form>

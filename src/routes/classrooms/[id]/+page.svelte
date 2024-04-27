<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<h1 class="scroll-m-20 py-4 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
	Classroom name {$page.params.id}
</h1>
<Button variant="secondary">Create a quiz</Button>
<p>Description of the quiz</p>

<script lang="ts">
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
	import Button from '../button/button.svelte';
	export let userType: 'student' | 'instructor' | undefined = 'student';
</script>

<aside class="hidden md:block w-1/4 rounded-l-md border p-4 px-8">
	<span class="text-lg font-bold">Main Menu</span>
	<ul class="flex flex-col gap-3 py-4">
		{#if userType === 'student'}
			<li>
				<Button href="/classrooms/join" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Join Classroom</span>
				</Button>
			</li>
			<li>
				<Button href="/classrooms" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Classrooms</span>
				</Button>
			</li>
			<li>
				<Button href="/results" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Results</span>
				</Button>
			</li>
			<li>
				<Button href="/profile" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Profile</span>
				</Button>
			</li>
			<li>
				<Button href="/about" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>About</span>
				</Button>
			</li>
		{:else if userType === 'instructor'}
			<li>
				<Button href="/classrooms/create" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Create Classroom</span>
				</Button>
			</li>
			<li>
				<Button href="/classrooms" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Classrooms</span>
				</Button>
			</li>
			<li>
				<Button href="/profile" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>Profile</span>
				</Button>
			</li>
			<li>
				<Button href="/about" variant="outline" class="w-full justify-start">
					<EnvelopeOpen class="mr-2 h-4 w-4" />
					<span>About</span>
				</Button>
			</li>
		{/if}
	</ul>
</aside>

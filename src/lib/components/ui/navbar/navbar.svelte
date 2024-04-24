<script lang="ts">
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
	import Button from '../button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	export let isLoggedIn: boolean = false;
	export let userType: 'student' | 'instructor' = 'student';
</script>

<nav class="flex items-center justify-between gap-5 border p-4 px-8">
	<Button variant="link" href={isLoggedIn ? '/home' : '/'} class="px-0 text-2xl">
		Banana Classroom
	</Button>
	<ul class="hidden gap-5 md:flex">
		{#if isLoggedIn}
			<li>
				<Button on:click={() => (window.location.href = '/?signout=true')} variant="outline">
					Sign Out
				</Button>
			</li>
		{:else}
			<li>
				<Button href="/signin" variant="default">Sign In</Button>
			</li>
			<li>
				<Button href="/signup" variant="outline">Sign Up</Button>
			</li>
		{/if}
	</ul>
	<div class="block md:hidden">
		<Sheet.Root>
			<Sheet.Trigger>
				<Button variant="outline">
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path></svg
					>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				{#if isLoggedIn}
					<Sheet.Header>
						<Sheet.Title>Main Menu</Sheet.Title>
						<Sheet.Description>User description</Sheet.Description>
					</Sheet.Header>
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
								<Button href="/classroom/create" variant="outline" class="w-full justify-start">
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
					<Sheet.Footer>
						<Sheet.Close asChild let:builder>
							<Button
								on:click={() => (window.location.href = '/?signout=true')}
								variant="outline"
								builders={[builder]}>Sign out</Button
							>
						</Sheet.Close>
					</Sheet.Footer>
				{:else}
					<Sheet.Header>
						<Sheet.Title>Main Menu</Sheet.Title>
					</Sheet.Header>
					<ul class="flex flex-col gap-2">
						<li>
							<Button class="w-full" href="/signin" variant="default">Sign In</Button>
						</li>
						<li>
							<Button class="w-full" href="/signup" variant="outline">Sign Up</Button>
						</li>
					</ul>
				{/if}
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>

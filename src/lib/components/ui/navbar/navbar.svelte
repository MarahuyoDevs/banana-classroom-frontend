<script lang="ts">
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
	import Button from '../button/button.svelte';
	import CartoonButton from '$lib/components/hyper/button/cartoon_button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	export let isLoggedIn: boolean = false;
	export let userType: 'student' | 'instructor' | string = 'student';
</script>

<nav
	class="border-border/4 sticky top-0 z-50 flex w-full items-center justify-between gap-5 bg-black p-4 {isLoggedIn
		? ''
		: 'md:px-28'}"
>
	<Button variant="link" href={isLoggedIn ? '/home' : '/'} class="gap-2 px-0 text-2xl">
		<img class="h-8 w-8 rounded-md" src="/banana_character_icon.png" alt="test" /> Banana Classroom
	</Button>
	{#if !isLoggedIn}
		<ul class="hidden flex-row gap-5 md:flex">
			<li>
				<Button href="/#home" variant="link">Home</Button>
			</li>
			<li>
				<Button href="/#features" variant="link">Features</Button>
			</li>
			<li>
				<Button href="/#roadmap" variant="link">Roadmap</Button>
			</li>
			<li>
				<Button href="/#about" variant="link">About</Button>
			</li>
		</ul>
	{/if}
	<ul class="hidden gap-5 md:flex">
		{#if !isLoggedIn}
			<li>
				<a href="/signin">
					<CartoonButton color="white">Sign in</CartoonButton>
				</a>
			</li>
			<li>
				<a href="/signup">
					<CartoonButton variant="secondary" color="white">Sign up</CartoonButton>
				</a>
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
			<Sheet.Content side="left" class="flex flex-col gap-5 overflow-y-auto bg-yellow-800">
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
								<Button href="/quiz" variant="outline" class="w-full justify-start">
									<EnvelopeOpen class="mr-2 h-4 w-4" />
									<span>Quizzes</span>
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
								<Button href="/quiz" variant="outline" class="w-full justify-start">
									<EnvelopeOpen class="mr-2 h-4 w-4" />
									<span>Quizzes</span>
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
						<Sheet.Title class="border-none">Main Menu</Sheet.Title>
					</Sheet.Header>
					<ul class="flex flex-col gap-2">
						<li>
							<a href="/signin">
								<CartoonButton class="w-full" variant="default">Sign In</CartoonButton>
							</a>
						</li>
						<li>
							<a href="/signup">
								<CartoonButton class="w-full" variant="secondary">Sign Up</CartoonButton>
							</a>
						</li>
					</ul>
					<h4>Links:</h4>
					<ul class="flex flex-col gap-2">
						<li>
							<a href="/#home">
								<CartoonButton class="w-full" variant="secondary">Home</CartoonButton>
							</a>
						</li>
						<li>
							<a href="/#features">
								<CartoonButton class="w-full" variant="secondary">Features</CartoonButton>
							</a>
						</li>
						<li>
							<a href="/#roadmap">
								<CartoonButton class="w-full" variant="secondary">Road map</CartoonButton>
							</a>
						</li>
						<li>
							<a href="/#about">
								<CartoonButton class="w-full" variant="secondary">About</CartoonButton>
							</a>
						</li>
					</ul>
				{/if}
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>

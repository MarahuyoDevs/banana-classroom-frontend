<script lang="ts">
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
	import Button from '../button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	export let userType: 'student' | 'instructor' | undefined | string = 'student';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	export let userData: any = undefined;
	let userName = <string[]>userData.name.S.split(' ');
	console.log();
</script>

<aside
	class="hidden min-h-screen w-fit flex-col items-center justify-between rounded-l-md border bg-black p-4 md:flex"
>
	<div>
		<span class="text-lg font-bold">
			<Avatar.Root>
				<Avatar.Fallback>
					{userName.at(0)?.split('').at(0)?.toUpperCase()}{userName
						.at(1)
						?.split('')
						.at(0)
						?.toUpperCase()}
				</Avatar.Fallback>
			</Avatar.Root>
		</span>
		<ul class="pt-4">
			{#if userType === 'student'}
				<li>
					<Tooltip.Root>
						<Tooltip.Trigger asChild let:builder>
							<Button builders={[builder]} href="/home" variant="ghost">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									>
									</path>
								</svg>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content side="right">
							<p>Home</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
			{:else if userType === 'instructor'}
				<li>
					<Tooltip.Root>
						<Tooltip.Trigger asChild let:builder>
							<Button builders={[builder]} href="/home" variant="ghost">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									>
									</path>
								</svg>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content side="right">
							<p>Home</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
				<li>
					<Tooltip.Root>
						<Tooltip.Trigger asChild let:builder>
							<Button builders={[builder]} href="/classrooms/create" variant="ghost">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path></svg
								>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content side="right">
							<p>Create Classroom</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
				<li>
					<Tooltip.Root>
						<Tooltip.Trigger asChild let:builder>
							<Button builders={[builder]} href="/classrooms" variant="ghost">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path></svg
								>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content side="right">
							<p>Classrooms</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
				<li>
					<Tooltip.Root>
						<Tooltip.Trigger asChild let:builder>
							<Button builders={[builder]} href="/quiz" variant="ghost">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path></svg
								>
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content side="right">
							<p>Quizzes</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
			{/if}
		</ul>
	</div>
	<div>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					on:click={() => (window.location.href = '/?signout=true')}
					variant="ghost"
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path></svg
					>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">
				<p>Sign out</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
	<!--
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
	-->
</aside>

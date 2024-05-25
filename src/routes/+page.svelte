<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/hyper/card/card.svelte';
	import CartoonButton from '$lib/components/hyper/button/cartoon_button.svelte';
</script>

<main class="grid min-h-screen grid-cols-12 bg-gradient-to-br from-yellow-400 to-red-400">
	<div class="col-span-1" />
	<section id="home" class="col-span-10 grid min-h-screen w-full grid-cols-2 items-center py-12">
		<div>
			<h1>A place that you will learn</h1>
			<p>
				Banana Classroom is the ultimate online assessment tool designed to elevate the educational
				experience for students and educators alike. Our platform is dedicated to creating engaging,
				interactive, and efficient assessments that foster a dynamic learning environment.
			</p>
			<div class="flex flex-row gap-3 pt-4">
				<a href="/signup">
					<CartoonButton color="white">Get Started</CartoonButton>
				</a>
				<a href="/about">
					<CartoonButton variant="secondary">Learn More</CartoonButton>
				</a>
			</div>
		</div>
		<img class="justify-self-center" src="/banana-character.gif" alt="" />
	</section>
	<div class="col-span-1" />
	<section
		id="features"
		class="relative col-span-12 grid w-full grid-cols-2 bg-opacity-60 bg-[url(/banana-features-cover.png)] bg-cover bg-no-repeat py-12"
	>
		<div class="absolute inset-0 bg-black/40" />
		<div class="z-30 col-span-12 grid w-full grid-cols-12">
			<div class="col-span-1" />
			<div class="col-span-10 flex w-full flex-col">
				<h2 class="border-none">Features</h2>
				<div class="col-span-12 grid grid-cols-12 gap-5 pt-4">
					<Card class="col-span-12 md:col-span-6">
						<svelte:fragment slot="header">Feature 1: Banana Classrooms</svelte:fragment>
						<svelte:fragment slot="content">
							This website gives instructors the power to create classrooms for their students to
							learn and master their educational fields. A space for educators to help hone a
							learner's intelligence.
						</svelte:fragment>
					</Card>
					<Card class="col-span-12 md:col-span-6">
						<svelte:fragment slot="header">Feature 2: Quizzes</svelte:fragment>
						<svelte:fragment slot="content">
							With the power to create classrooms, instructors can also create quizzes to test the
							limits of their students. The quiz has tons of options to offer to make answering
							questions more dynamic and flexible.
						</svelte:fragment>
					</Card>
					<Card class="col-span-full w-full md:col-span-12">
						<svelte:fragment slot="header">Feature 3: Timers & Results</svelte:fragment>
						<svelte:fragment slot="content">
							As an instructor, you can adjust the timer of your quizzes and create an even bigger
							challenge for your students. Afterwards, our system will gather up the results and
							automatically make a result page for students to reflect on their successes or
							mistakes.
						</svelte:fragment>
					</Card>
					<Card class="col-span-full w-full md:col-span-12">
						<svelte:fragment slot="header">Feature 4: Personalization</svelte:fragment>
						<svelte:fragment slot="content">
							We want our users to be more free to express themselves, so we have a profile function
							where users can style themselves and customize their accounts
						</svelte:fragment>
					</Card>
				</div>
			</div>
			<div class="col-span-1" />
		</div>
	</section>
	<div class="col-span-1" />
	<section class="col-span-10 grid w-full grid-cols-2 py-12">
		<div class="col-span-full">
			<h2 class="border-none">Development History:</h2>
			<table class="">
				<thead>
					<tr>
						<th>Author</th>
						<th>Date</th>
						<th>Message</th>
					</tr>
				</thead>
			</table>
		</div>
	</section>
	<div class="col-span-1" />
</main>

<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/hyper/card/card.svelte';
	import CartoonButton from '$lib/components/hyper/button/cartoon_button.svelte';
</script>

<main class="grid min-h-screen grid-cols-12 bg-gradient-to-br from-yellow-400 to-red-400">
	<div class="col-span-1" />
	<section
		id="home"
		class="col-span-10 grid min-h-screen w-full grid-cols-12 items-center py-12 md:grid-cols-2"
	>
		<div class="col-span-full md:col-span-1">
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
		<img class="hidden justify-self-center md:block" src="/banana-character.gif" alt="" />
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
						<svelte:fragment slot="header">Feature 4: Authorized Roles</svelte:fragment>
						<svelte:fragment slot="content">
							Our website has the power to assign roles that also have different functions. The
							instructor role has the ability to create classrooms and quizzes, while the student
							role can join those classrooms and answer those quizzes. We envision a working system
							for these roles that helps each other to gain more knowledge.
						</svelte:fragment>
					</Card>
				</div>
			</div>
			<div class="col-span-1" />
		</div>
	</section>
	<div class="col-span-1" />
	<section id="features" class="relative col-span-12 grid w-full grid-cols-2 py-12">
		<div class="col-span-12 grid w-full grid-cols-12">
			<div class="col-span-1" />
			<div class="col-span-10 flex w-full flex-col">
				<h2 class="border-none">Development Roadmap</h2>
				<div class="col-span-12 grid grid-cols-12 gap-5 pt-4">
					<Card class="col-span-12 md:col-span-6">
						<svelte:fragment slot="header">Roadmap 1: Opportunities</svelte:fragment>
						<svelte:fragment slot="content">
							We are an upcoming development team that is looking for a chance to show our skills.
							Thankfully, a client reached out to us for an offer that would benefit both parties
							and society. We were given an opportunity to create an environment for users to
							educate one another and help develop their education.
						</svelte:fragment>
					</Card>
					<Card class="col-span-12 md:col-span-6">
						<svelte:fragment slot="header">Roadmap 2: Inspirations</svelte:fragment>
						<svelte:fragment slot="content">
							Before we started developing, we asked ourselves first, "How should we develop this?"
							We as a development team never experienced how to create a learning platform. So, we
							looked for websites that inspired us and helped us form an image of how we should
							deliver our website to the public. In the end, "Banana Classroom" was born.
						</svelte:fragment>
					</Card>
					<Card class="col-span-12 w-full md:col-span-6">
						<svelte:fragment slot="header">Roadmap 3: Testing the waters</svelte:fragment>
						<svelte:fragment slot="content">
							As we started to develop, we were experimenting with the product. We wanted to make
							sure that the overall features of our website would benefit our clients, society, and
							ourselves. As we tried different approaches, we finally found the fitting piece to our
							puzzle. With a clearer path to our goal, we were dead set on the finish line.
						</svelte:fragment>
					</Card>
					<Card class="col-span-12 w-full md:col-span-6">
						<svelte:fragment slot="header">Roadmap 4: Developing with rhythm</svelte:fragment>
						<svelte:fragment slot="content">
							When we finally found our rhythm, we started creating "Banana Classroom" piece by
							piece. We split our development group to maximize progress for the sake of our client
							and our time. Even though we had different roles, we still assisted each other so that
							no part of the website would be left behind and that, as a team, we were in the same
							picture at each step.
						</svelte:fragment>
					</Card>
					<Card class="col-span-12 w-full md:col-span-12">
						<svelte:fragment slot="header">Roadmap 4: Colors & Patterns</svelte:fragment>
						<svelte:fragment slot="content">
							After we got our systems up and running, the only task left was the design of our
							product. At first, we tried a more minimalistic style, but it was too bland and
							boring. So, we switched it up to a more fun and cartoonish theme. With the help of our
							clients, we finally finished the design, and with a few more tweaks, "Banana
							Classroom" was ready to tackle the world.
						</svelte:fragment>
					</Card>
				</div>
			</div>
			<div class="col-span-1" />
		</div>
	</section>
	<div class="col-span-1" />
</main>

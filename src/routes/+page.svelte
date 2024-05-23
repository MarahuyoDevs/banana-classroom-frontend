<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<main class="bg-transparent">
	<section
		id="home"
		class="grid min-h-screen grid-cols-1 items-center justify-items-center bg-gradient-to-br from-yellow-400 to-red-400 p-24 md:grid-cols-2"
	>
		<div>
			<h1>A place that you will learn</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nulla officia quis,
				saepe nesciunt, aut, omnis reprehenderit necessitatibus temporibus quae libero velit? Quo
				quas corporis dolores voluptatem earum expedita molestias.
			</p>
		</div>
		<img src="/banana-character.gif" class="" alt="A banana that is dancing" />
	</section>
	<section
		class="min-h-screen border-dashed border-white bg-transparent/40 bg-gradient-to-tr from-yellow-400 to-red-400 px-24 py-12"
	>
		<h2 class="border-none">Features:</h2>
		<div class="grid grid-cols-12 gap-5">
			<Card.Root class="col-span-full border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 1</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-6 border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 2</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-6 border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 3</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-full border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 4</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
		</div>
	</section>
	<section
		class="min-h-screen border-dashed border-white bg-transparent/40 bg-gradient-to-br from-yellow-400 to-red-400 px-24 py-12 backdrop-blur-sm"
	>
		<h2 class="border-none">Features:</h2>
		<div class="grid grid-cols-12 gap-5">
			<Card.Root class="col-span-full border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 1</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-6 border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 2</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-6 border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 3</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
			<Card.Root class="col-span-full border-dashed bg-transparent">
				<Card.Header>
					<Card.Title>Feature 4</Card.Title>
					<Card.Description class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis temporibus
						quod architecto asperiores officiis illo vitae. Quasi, velit natus.
					</Card.Description>
				</Card.Header>
			</Card.Root>
		</div>
	</section>
</main>

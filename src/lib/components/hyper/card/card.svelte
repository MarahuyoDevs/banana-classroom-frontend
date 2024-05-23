<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('group relative', className)}>
	<div class="absolute inset-0 border-2 border-dashed border-white"></div>
	<div
		class="border-2 border-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
	>
		<div class="relative h-full p-4 opacity-100 group-hover:absolute group-hover:opacity-0">
			<slot name="header" />
		</div>
		<div class="absolute h-full p-4 opacity-0 group-hover:relative group-hover:opacity-100">
			<slot name="content" />
		</div>
	</div>
</div>

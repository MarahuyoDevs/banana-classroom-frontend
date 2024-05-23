<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<button class={cn('group relative inline-block focus:outline-none focus:ring', className)}>
	<span
		class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
	></span>
	<span
		class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground group-active:text-opacity-75"
	>
		<slot />
	</span>
</button>

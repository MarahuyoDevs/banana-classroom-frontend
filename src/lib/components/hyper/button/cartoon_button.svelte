<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes & {
		color?: 'white' | 'black';
		variant?: 'default' | 'secondary';
	};

	let className: $$Props['class'] = undefined;
	export let color: $$Props['color'] = 'black';
	export let variant: $$Props['variant'] = 'default';
	export { className as class };
</script>

<button
	{...$$restProps}
	class={cn('group relative inline-block focus:outline-none focus:ring', className)}
	on:click
	on:keydown
>
	<span
		class="absolute inset-0 translate-x-1.5 translate-y-1.5 {variant === 'default'
			? 'bg-primary'
			: 'bg-secondary'} transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
	></span>
	<span
		class="relative inline-block w-full border-2 {variant === 'default'
			? 'text-black'
			: 'text-white'} {color === 'black'
			? 'border-current'
			: 'border-white'} px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground group-active:text-opacity-75"
	>
		<slot />
	</span>
</button>

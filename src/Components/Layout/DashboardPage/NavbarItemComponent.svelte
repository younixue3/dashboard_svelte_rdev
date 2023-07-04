<script lang="ts">
	export let icon: string;
	export let title: string;
	export let to: string;

	import Fa from 'svelte-fa/src/fa.svelte';
	import '@fortawesome/free-solid-svg-icons';
	import * as FaIcons from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';

	let icons: any = FaIcons;
	let toggle = false;

	function pathcheck(currentPath) {
		toggle = $page.url.pathname.includes(to)
	}
	$: pathcheck($page.url.pathname)
</script>

<div>
	<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" class:text-orange-600={toggle} href={to}>
		<Fa icon={icons[icon]} class="w-10 inline" />{title}
	</a>
</div>

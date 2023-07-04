<script lang="ts">
	import {page} from "$app/stores";

	export let icon: string;
	export let title: string;
	export let nest: string;

	import Fa from 'svelte-fa/src/fa.svelte';
	import '@fortawesome/free-solid-svg-icons';
	import * as FaIcons from '@fortawesome/free-solid-svg-icons';

	let icons: any = FaIcons;
	let toggle = false;

	function ToogleDropdown() {
		toggle = toggle == false;
	}
	function pathcheck(currentPath) {
		toggle = $page.url.pathname.split('/').includes(nest)
	}
	$: pathcheck($page.url.pathname)

</script>
<div>
	<button class="text-gray-600 hover:text-orange-600 font-semibold py-1" class:text-orange-600={toggle} on:click={ToogleDropdown}>
		<div class="">
			<Fa icon={icons[icon]} class="w-10 inline" />{title}
		</div>

	</button>
	<div class="bg-gray-200 rounded-xl w-full transition-all ease-in-out overflow-hidden" class:h-20={toggle} class:h-0={!toggle}>
		<slot></slot>
	</div>
</div>

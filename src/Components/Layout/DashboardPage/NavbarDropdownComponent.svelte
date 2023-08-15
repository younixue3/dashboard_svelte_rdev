<script lang="ts">
	import {page} from "$app/stores";

	export let icon: string;
	export let title: string;
	export let nest: string;

	import Fa from 'svelte-fa/src/fa.svelte';
	import '@fortawesome/free-solid-svg-icons';
	import * as FaIcons from '@fortawesome/free-solid-svg-icons';

	let icons: any = FaIcons;
	let toggle;

	function ToogleDropdown() {
		toggle = toggle == false;
	}
	function pathcheck(currentPath) {
		toggle = $page.url.pathname.split('/').includes(nest)
	}
	$: pathcheck($page.url.pathname)

</script>

<div>
	<button class="text-gray-600 hover:text-orange-600 font-semibold flex justify-between w-full" class:text-orange-600={toggle} on:click={ToogleDropdown}>
		<div class="">
			<Fa icon={icons[icon]} class="w-10 inline" />{title}
		</div>
		<div>
			<Fa icon={icons[toggle ? 'faMinus' : 'faPlus']} class="w-10 text-xs inline" />
		</div>
	</button>
	<div class="bg-gray-500 bg-opacity-20 rounded-xl w-full transition-all ease-in-out duration-500 overflow-hidden mt-1" class:max-h-[40rem]={toggle} class:max-h-0={!toggle}>
		<div class="p-2 space-y-2">
			<slot></slot>
		</div>
	</div>
</div>

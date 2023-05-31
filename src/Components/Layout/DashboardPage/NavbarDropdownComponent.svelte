<script lang="ts">
	export let icon: string;
	import Fa from 'svelte-fa/src/fa.svelte';
	import '@fortawesome/free-solid-svg-icons';
	import * as FaIcons from '@fortawesome/free-solid-svg-icons';
	let icons: any = FaIcons;

	let toogle: boolean;

	function ToogleDropdown() {
		toogle = toogle == false;
	}
</script>

<button class="text-gray-600 hover:text-orange-600 font-semibold py-1" on:click={ToogleDropdown}>
	<div class="" />
	<Fa icon={icons[icon]} class="w-10 inline" />Dashboard
</button>

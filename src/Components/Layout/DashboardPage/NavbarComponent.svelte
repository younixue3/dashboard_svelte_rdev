<script>
	// import Icon from '$lib/assets/favicon.png';
	// import Fa from 'svelte-fa/src/fa.svelte';
	// import { faHome, faFileAlt, faCogs, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
	import NavbarItemComponent from './NavbarItemComponent.svelte';
	import NavbarDropdownComponent from "./NavbarDropdownComponent.svelte";
</script>

<div class="bg-white p-8 rounded-3xl w-80 m-5 space-y-10">
	<div class="flex-row space-y-5">
		<svg
			class="h-12 w-12 rounded-2xl"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Svelte"
			role="img"
			viewBox="0 0 512 512"
			fill="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/><g id="SVGRepo_iconCarrier"
				><rect width="512" height="512" rx="15%" fill="#ff3e00" /><path
					fill="#ffffff"
					d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"
				/><path
					fill="#ff3e00"
					d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"
				/></g
			></svg
		>
		<h1 class="text-gray-500 text-sm">RDeveloper .Inc</h1>
	</div>
	<div class="space-y-2 w-full text-left">
		<NavbarItemComponent icon='faHome' title='Dashboard' to='/dashboard'/>
		<NavbarItemComponent icon='faCube' title='Widgets' to='/widgets'/>
		<NavbarDropdownComponent icon='faLayerGroup' nest="layout" title='Layout'>
			<div class="p-3 space-y-2">
				<NavbarItemComponent icon='faLayerGroup' title='Type 1' to='/layout/index1'/>
				<NavbarItemComponent icon='faLayerGroup' title='Type 2' to='/layout/index2'/>
			</div>
		</NavbarDropdownComponent>
		<NavbarDropdownComponent icon='faPuzzlePiece' nest="component" title='Component'>
			<div class="p-3 space-y-2">
				<NavbarItemComponent icon='faLayerGroup' title='Type 1' to='/component/component1'/>
				<NavbarItemComponent icon='faLayerGroup' title='Type 2' to='/component/component2'/>
			</div>
		</NavbarDropdownComponent>
<!--		<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href="">-->
<!--			<Fa icon={faHome} class="w-10 inline" />Dashboard-->
<!--		</a>-->
<!--		<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href="">-->
<!--			<Fa icon={faThLarge} class="w-10 inline" />Widgets-->
<!--		</a>-->
<!--		<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href="">-->
<!--			<Fa icon={faFileAlt} class="w-10 inline" />Form-->
<!--		</a>-->
<!--		<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href="">-->
<!--			<Fa icon={faCogs} class="w-10 inline" />Layout Settings-->
<!--		</a>-->
<!--		<a class="text-gray-600 hover:text-orange-600 font-semibold py-1" href="">-->
<!--			<Fa icon={faHome} class="w-10 inline" />Dashboard-->
<!--		</a>-->
	</div>
</div>

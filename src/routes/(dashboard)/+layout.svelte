<script>
	import NavbarComponent from '../../Components/Layout/DashboardPage/default/NavbarComponent.svelte';
	import SidebarComponent from '../../Components/Layout/DashboardPage/SidebarComponent.svelte';
	import NavbarDropdownComponent from "../../Components/Layout/DashboardPage/NavbarDropdownComponent.svelte";
	import NavbarItemComponent from "../../Components/Layout/DashboardPage/NavbarItemComponent.svelte";
	import {page} from "$app/stores";

	$: CurrentPage = $page.url.pathname.replaceAll('/', ' ').replace('_', ' ')

</script>

<div class="flex w-full min-h-screen bg-gray-200">
	<NavbarComponent>
		<NavbarItemComponent icon='faHome' title='Dashboard' to='/dashboard'/>
		<NavbarDropdownComponent icon='faFile' nest="page" title='Page'>
			<NavbarDropdownComponent icon='faFile' nest="admin" title='Dashboard'>
				<NavbarItemComponent icon='faChartLine' title='Analytics' to='/page/admin
				/analytics'/>
			</NavbarDropdownComponent>
		</NavbarDropdownComponent>
		<NavbarDropdownComponent icon='faPuzzlePiece' nest="component" title='Component'>
			<NavbarItemComponent icon='faLayerGroup' title='Type 1' to='/component/component1'/>
			<NavbarItemComponent icon='faLayerGroup' title='Type 2' to='/component/component2'/>
		</NavbarDropdownComponent>
	</NavbarComponent>
	<div class="p-5">
		<h1 class="text-2xl font-bold capitalize">{CurrentPage}</h1>
		<slot />
	</div>
	<SidebarComponent />
</div>

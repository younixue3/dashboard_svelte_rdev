<script>
	import NavbarComponent from '../../Components/Layout/DashboardPage/NavbarComponent.svelte';
	import SidebarComponent from '../../Components/Layout/DashboardPage/SidebarComponent.svelte';
</script>

<div class="flex w-full min-h-screen bg-gray-200">
	<NavbarComponent />
	<div class="p-5">
		<slot />
	</div>
	<SidebarComponent />
</div>

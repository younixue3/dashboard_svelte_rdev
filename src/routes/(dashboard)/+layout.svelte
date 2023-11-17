<script lang="ts">
    import NavbarComponent from '../../Components/Layout/DashboardPage/default/NavbarComponent.svelte';
    import SidebarComponent from '../../Components/Layout/DashboardPage/SidebarComponent.svelte';
    import NavbarDropdownComponent from "../../Components/Layout/DashboardPage/NavbarDropdownComponent.svelte";
    import NavbarItemComponent from "../../Components/Layout/DashboardPage/NavbarItemComponent.svelte";
    import {page} from "$app/stores";
    import BreadcrumbsComponent from "../../Components/Breadcrumbs/BreadcrumbsComponent.svelte";

    // $: CurrentPage = $page.url.pathname.replaceAll('/', ' ').replace('_', ' ')

</script>

<div class="flex flex-col lg:flex-row relative w-full min-h-screen">
    <div class="h-10 lg:h-0 w-full lg:w-80 relative">
        <NavbarComponent>
            <NavbarItemComponent icon='faHome' title='Dashboard' to='/dashboard'/>
            <NavbarDropdownComponent icon='faFile' nest="page" title='Page'>
                <NavbarItemComponent icon='faChartLine' title='Analytics' to='/page/analytics'/>
                <NavbarItemComponent icon='faUser' title='Profile' to='/page/profile'/>
                <NavbarItemComponent icon='faMedal' title='SPK Penerima Beasiswa' to='/page/spk_penerima_beasiswa'/>
            </NavbarDropdownComponent>
            <NavbarDropdownComponent icon='faPuzzlePiece' nest="component" title='Component'>
                <NavbarItemComponent icon='faLayerGroup' title='Type 1' to='/component/component1'/>
                <NavbarItemComponent icon='faLayerGroup' title='Type 2' to='/component/component2'/>
            </NavbarDropdownComponent>
            <NavbarItemComponent icon='faLayerGroup' title='Widget' to='/widget'/>
        </NavbarComponent>
    </div>
    <div class="my-3 rounded-3xl p-2 w-full">
        <BreadcrumbsComponent/>
        <div class="p-5">
            <slot></slot>
        </div>
    </div>
</div>

<script lang="ts">
	import ButtonComponent from "../Button/ButtonComponent.svelte";

	export let action_button = false;
	export let title: string;



	let className = '';
	export { className as class};
</script>

<div class={"shadow-md rounded-lg " + className}>
	{#if title}
		<div class="flex justify-end p-2 px-4 border-b-2">
			{#if title}
				<div class="w-full m-auto">
					{title}
				</div>
			{/if}
			{#if (action_button)}
				<ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
					<slot name="actions_button"></slot>
				</ButtonComponent>
			{:else if ($$slots.custom_button)}
				<slot name="custom_button">

				</slot>
			{/if}
		</div>
	{/if}
	<slot name="content"></slot>
	{#if $$slots.footer}
		<div class="border-t p-5">
			<slot name="footer"></slot>
		</div>
	{/if}
</div>

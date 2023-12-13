<script lang="ts">
    export let label:string;
    export let type = 'text';
    export let name:string;
    export let color = 'bg-white';
    export let value = '';
    export let disabled:boolean;
    export let required:boolean;

    $:input = value;

    function onChanges(e:any) {
        input = e.target.value
    }
</script>

<div class="flex h-full w-full relative">
    <input required="{required}" disabled={disabled} name={name} id={'rdev-'+name} type={type} placeholder="" on:change={onChanges} class={color + " w-full border text-md px-1.5 pt-2 pb-1.5 text-gray-800 rounded-md peer outline-none border-b-2 border-b-blue-800/ focus:border-b-blue-800/100 transition-all ease-in-out"}>
    <label for={'rdev-'+name} class={(input || type == 'date' ? 'text-black -translate-y-8 ' : 'select-none text-gray-400 cursor-text peer-focus:text-black peer-focus:-translate-y-8 ') + "text-sm absolute px-2 h-full flex items-center transition-all ease-in-out"}>{label}</label>
</div>

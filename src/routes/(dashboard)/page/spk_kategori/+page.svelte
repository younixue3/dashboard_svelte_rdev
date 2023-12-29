<script lang="ts">
    import ButtonComponent from "../../../../Components/Button/ButtonComponent.svelte";
    import CardComponents from "../../../../Components/Card/CardComponents.svelte";
    import PocketBase from 'pocketbase';
    import ModalComponent from "../../../../Components/Modal/ModalComponent.svelte";
    import InputComponent from "../../../../Components/Form/InputComponent.svelte";

    let pageData = 20;
    const pb = new PocketBase('http://127.0.0.1:8090');
    pb.autoCancellation(false);
    let promise = Promise.resolve([])
    let bobot_kategori: any;
    pb.collection('kategori').getFullList()
        .then((resp) => {
            console.log(resp)
            resp.forEach((item) => {
                console.log(item)
                // const datas = {
                //     "x_relation": item.id,
                //     "y_relation": "t2gzhnkn4y1y5g6",
                //     "r_index": 0
                // };
                // pb.collection('kategori_ahp_collection').create(datas);
            })
        })
    // pb.collection('bobot_kategori').getFullList({filter: 'id_kategori = "adnznzxov9cjnqt"'})
    //     .then((resp) => {
    //         console.log(resp)
    //         resp.forEach((item, index) => {
    //             console.log(((resp.length - index) / (resp.length + 1) ) * 1)
    //             const data = {
    //                 "bobot": resp.length - index / resp.length * 100,
    //             };
    //             // pb.collection('bobot_kategori').update(item.id, data)
    //         })
    //     })
    export let data;

    $: indexPage = 1;

    let mahasiswa: any = [];

    async function GetBobotKategori(id_kategori: string) {
        bobot_kategori = null
        const record = await pb.collection('bobot_kategori').getFullList({filter: `id_kategori = "${id_kategori}"`})
        bobot_kategori = record
    }

    // function kalkulasi(data) {
    //     var new_data = data
    //     new_data.k1 = kalkulasi_ipk(parseInt(new_data.ipk))
    //     new_data.k2 = kalkulasi_masa_studi(parseInt(new_data.masa_studi))
    //     new_data.k3 = kalkulasi_prestasi(new_data.prestasi)
    //     new_data.k4 = kalkulasi_ta(new_data.ta)
    //     new_data.total = kalkulasi_sum(new_data.k1, new_data.k2, new_data.k3, new_data.k4)
    //     return new_data
    // }

    // mahasiswa.forEach((value, index) => {
    //     analisa.push(kalkulasi(value))
    // })

    mahasiswa = data.record
</script>

<div class="grid grid-cols-8 gap-3">
    <ModalComponent icon="faPlus" text="Add Kategori" color="bg-primary">
        <slot slot="content">
            <form id="form_kategori" method="POST" action="?/create" class="grid grid-cols-6 gap-5 p-10">
                <div class="col-span-6">
                    <!--                    <input name="nama"/>-->
                    <InputComponent label="Nama Nilai" name="nama_nilai" required={true}/>
                </div>
                <div class="col-span-6">
                    <!--                    <input name="kode" />-->
                    <InputComponent label="Nama Kategori" name="nama_kategori" required={true}/>
                </div>
<!--                <div class="col-span-6">-->
<!--                    &lt;!&ndash;                    <input name="kode" />&ndash;&gt;-->
<!--                    <InputComponent type="number" label="Nilai Kriteria" name="nilai_kriteria" required={true}/>-->
<!--                </div>-->
            </form>
        </slot>
        <slot slot="footer">
            <div class="grid grid-cols-2">
                <ButtonComponent form="form_kategori" text="Submit" type="submit" color="bg-primary"/>
            </div>
        </slot>
    </ModalComponent>
    <CardComponents class="bg-white col-span-8">
        <slot slot="content">
            <table class="w-full table-auto text-sm text-center mt-5 mb-2">
                <thead class="h-10">
                <tr>
                    <th>Id</th>
                    <th>Nama Nilai</th>
                    <th>Nama Kategori</th>
                    <th>Nilai Kriteria</th>
                </tr>
                </thead>
                <tbody>
                {#each data.record as item, key}
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_nilai}</td>
                        <td>{item.nama_kategori}</td>
                        <td>{Math.round(item.nilai_kriteria * 1000) / 1000}</td>
                        <!--                            <td>{item.nama}</td>-->
                        <!--                        <td>{Math.round(item.k1 * 100) / 100}</td>-->
                        <!--                        <td>{Math.round(item.k2 * 100) / 100}</td>-->
                        <!--                        <td>{Math.round(item.k3 * 100) / 100}</td>-->
                        <!--                        <td>{Math.round(item.k4 * 100) / 100}</td>-->
                        <!--                        <td>{Math.round(item.total * 1000) / 1000}</td>-->
                        <td>
                            <ButtonComponent icon="faEllipsisVertical" color="bg-clear" dropdown="true">
                                <slot name="actions_button">
                                    <!--                                    <a class="p-1 rounded-md hover:bg-gray-200" href="">Edit</a>-->
                                    <!--                                    <a class="p-1 rounded-md hover:bg-gray-200" href="">Archive</a>-->
                                    <button on:click={GetBobotKategori(item.id)}>
                                        <ModalComponent text={"Bobot " + item.nama_nilai} color="bg-transparent">
                                            <slot slot="content">
                                                <div class="p-10">
                                                    <form id="form_bobot_kategori" method="POST" action="?/create_bobot_kategori"
                                                          class="grid grid-cols-6 gap-5">
                                                        <input type="hidden" name="id_kategori" value={item.id}/>
                                                        <div class="col-span-6">
                                                            <!--                    <input name="nama"/>-->
                                                            <InputComponent label="Minimal Value" name="min_val"
                                                                            required={true}/>
                                                        </div>
                                                        <div class="col-span-6">
                                                            <!--                    <input name="kode" />-->
                                                            <InputComponent label="Maximal Value" name="max_val"
                                                                            required={false}/>
                                                        </div>
                                                        <div class="col-span-6">
                                                            <!--                    <input name="kode" />-->
                                                            <InputComponent type="number" label="Bobot" name="bobot"
                                                                            required={true}/>
                                                        </div>
                                                    </form>
                                                    {#if (bobot_kategori)}
                                                        <table class="w-full table-auto text-sm text-center border border-black mt-5 mb-2">
                                                            <thead class="h-10">
                                                            <tr>
                                                                <th>Range</th>
                                                                <th>Bobot</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {#each bobot_kategori as item}
                                                                <tr class="border-y border-black">
                                                                    <td>{item.min_val} {item.max_val ? '- ' + item.max_val : ''}</td>
                                                                    <td>{Math.round(item.bobot * 10000) / 10000}</td>
                                                                </tr>
                                                            {/each}
                                                            </tbody>
                                                        </table>
                                                    {/if}
                                                </div>
                                            </slot>
                                            <slot slot="footer">
                                                <div class="grid grid-cols-2">
                                                    <ButtonComponent form="form_bobot_kategori" text="Submit" type="submit"
                                                                     color="bg-primary"/>
                                                </div>
                                            </slot>
                                        </ModalComponent>
                                    </button>
                                </slot>
                            </ButtonComponent>
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </slot>
    </CardComponents>
</div>

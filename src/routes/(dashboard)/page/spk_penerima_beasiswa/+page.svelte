<script lang="ts">
    import {setContext} from "svelte";
    import {faCaretUp, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';
    import ChartComponent from "../../../../Components/Charts/ChartComponent.svelte";
    import ButtonComponent from "../../../../Components/Button/ButtonComponent.svelte";
    import PaginationComponent from "../../../../Components/Pagination/PaginationComponent.svelte";
    import CardComponents from "../../../../Components/Card/CardComponents.svelte";
    import {writable} from "svelte/store";

    setContext('counter', { changePage, pagePrevNext });

    let pageData = 20;

    $: indexPage = 1;

    function changePage(pageNumber) {
        if (pageNumber >= 1 || pageNumber <= pageData) {
            indexPage = pageNumber
        }
    }

    function pagePrevNext(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= pageData) {
            indexPage = pageNumber
        }
    }

    const nilai_kriteria = {
        ipk: 0.55016036594984,
        masa_studi: 0.248777538251222,
        prestasi: 0.118473631631526,
        ta: 0.0825884641674115
    }
    const ipk = {
        t1: 0.485317642784256,
        t2: 0.234174789869841,
        t3: 0.135481322970902,
        t4: 0.0876467473498038,
        t5: 0.0573794970251973
    }
    const masa_studi = {
        t1: 0.633345720302242,
        t2: 0.26049795615013,
        t3: 0.106156323547628
    }
    const prestasi = {
        t1: 0.524313186813187,
        t2: 0.221565934065934,
        t3: 0.158104395604396,
        t4: 0.0960164835164835
    }
    const ta = {
        t1: 0.633345720302242,
        t2: 0.26049795615013,
        t3: 0.106156323547628
    }

    const mahasiswa= [
        {kode: 'A1', nama: 'DINDA AYU FRAMAISELLA', ipk: '4', masa_studi: '2',prestasi: 'Regional', ta: 'A'},
        {kode: 'A2', nama: 'IRVAN EFENDI', ipk: '4', masa_studi: '2',prestasi: '', ta: 'A'},
        {kode: 'A3', nama: 'NURWINDAWATI', ipk: '4', masa_studi: '2',prestasi: '', ta: 'A'},
        {kode : 'A4', nama: 'RAUDHATUL ADAWIYAH', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A5', nama: 'ERY MURNISIAH', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A6', nama: 'EVIE JUMIATI S', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A7', nama: 'FRAGA BATARA KRAYANA TAMA', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A8', nama: 'HARDIYANTI WARDANAH', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A9', nama: 'JITA INDAH SARI', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A10', nama: 'LIDYA VERA SIANTURI', ipk: '3.97', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A11', nama: 'ABDUL MUIS', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A12', nama: 'ACHMAT RIYADI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A13', nama: 'ANIKA PRAMESTI REGITA', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A14', nama: 'EKSA HENTIN SEKARNINGRUM', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A15', nama: 'ETA FATRIANY', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A16', nama: 'FATIMAH', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A17', nama: 'FEBRI TRI RAHAYU', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A18', nama: 'GRADIAN PUTRA ANANTA', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A19', nama: 'KARMILA MAINIKE PUTRI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A20', nama: 'MAY FAJRIANI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A21', nama: 'MIRAWATI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A22', nama: 'MUHAMMAD REZZA', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A23', nama: 'NAHDIYATY NUR RAHMI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A24', nama: 'NUR ASIYAH', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A25', nama: 'REKA LADINA SAQILA', ipk: '3.96', masa_studi: '2', prestasi: 'Regional', ta: 'A'},
        {kode : 'A26', nama: 'RESTA REVALDA NINGSIH', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A27', nama: 'RISCANANDA NOVIA ARMAH', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A28', nama: 'SHELA ERNITA', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A29', nama: 'SRI WAHYUNI', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A30', nama: 'SURYA RAKHMAT HIDAYAT', ipk: '3.96', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A31', nama: 'MUHAMMAD WAHYU RAMADANI', ipk: '3.94', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A32', nama: 'NADIA NUR HAIDAH', ipk: '3.94', masa_studi: '2', prestasi: '', ta: 'AB'},
        {kode : 'A33', nama: 'DEDE DAMARA PUTRA', ipk: '3.93', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A34', nama: 'MENTARI APRIANI', ipk: '3.93', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A35', nama: 'UMIL MAKARIM', ipk: '3.93', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A36', nama: 'ADITYA SEPTIADINATA', ipk: '3.92', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A37', nama: 'FITRI WULANDARI', ipk: '3.92', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A38', nama: 'JULITA PRATIWI', ipk: '3.92', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A39', nama: 'NILUH KRISMAYANTI PRASTIKA', ipk: '3.92', masa_studi: '2', prestasi: '', ta: 'A'},
        {kode : 'A40', nama: 'NOLVA INDAH PERMATA', ipk: '3.92', masa_studi: '2', prestasi: '',ta:'A'},
    ]

    const analisa = []

    function kalkulasi_ipk(nilai_ipk) {
        if (nilai_ipk === 4) {
            return nilai_kriteria.ipk * ipk.t1
        } else if (nilai_ipk >= 3.8 || nilai_ipk <= 3.99) {
            return nilai_kriteria.ipk * ipk.t2
        } else if (nilai_ipk >= 3.7 || nilai_ipk <= 3.79) {
            return nilai_kriteria.ipk * ipk.t3
        } else if (nilai_ipk >= 3.5 || nilai_ipk <= 3.69) {
            return nilai_kriteria.ipk * ipk.t4
        } else if (nilai_ipk >= 3.76 || nilai_ipk <= 3.49) {
            return nilai_kriteria.ipk * ipk.t5
        } else {
            return 0
        }
    }

    function kalkulasi_masa_studi(nilai_masa_studi) {
        if (nilai_masa_studi === 1) {
            return nilai_kriteria.masa_studi * masa_studi.t1
        } else if (nilai_masa_studi === 2) {
            return nilai_kriteria.masa_studi * masa_studi.t2
        } else if (nilai_masa_studi === 3) {
            return nilai_kriteria.masa_studi * masa_studi.t3
        } else {
            return 0
        }
    }

    function kalkulasi_prestasi(nilai_prestasi) {
        if (nilai_prestasi === 'Internasional') {
            return nilai_kriteria.prestasi * prestasi.t1
        } else if (nilai_prestasi === 'Nasional') {
            return nilai_kriteria.prestasi * prestasi.t2
        } else if (nilai_prestasi === 'Regional') {
            return nilai_kriteria.prestasi * prestasi.t3
        } else {
            return nilai_kriteria.prestasi * prestasi.t4
        }
    }

    function kalkulasi_ta(nilai_ta) {
        if (nilai_ta === 'A') {
            return nilai_kriteria.ta * ta.t1
        } else if (nilai_ta === 'AB') {
            return nilai_kriteria.ta * ta.t2
        } else if (nilai_ta === 'B') {
            return nilai_kriteria.ta * ta.t3
        } else {
            return 0
        }
    }

    function kalkulasi_sum(k1,k2,k3,k4) {
        return k1 + k2 + k3 + k4
    }

    function kalkulasi(data) {
        var new_data = data
        new_data.k1 = kalkulasi_ipk(parseInt(new_data.ipk))
        new_data.k2 = kalkulasi_masa_studi(parseInt(new_data.masa_studi))
        new_data.k3 = kalkulasi_prestasi(new_data.prestasi)
        new_data.k4 = kalkulasi_ta(new_data.ta)
        new_data.total = kalkulasi_sum(new_data.k1, new_data.k2, new_data.k3, new_data.k4)
        return new_data
    }

    mahasiswa.forEach((value, index) => {
        analisa.push(kalkulasi(value))
    })
    console.log(analisa)

    // console.log(analisa)
    // for (let i=0;i<mahasiswa.length; i++) {
    //     analisa.push(mahasiswa[])
    // }
</script>

<div class="grid grid-cols-8 gap-3">
    <CardComponents class="bg-white col-span-8">
        <slot slot="content">
            <table class="w-full table-auto text-sm text-center mt-5 mb-2">
                <thead class="h-10">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <!--                    <th>Payment</th>-->
                    <th>K1</th>
                    <!--                    <th>Delivery</th>-->
                    <th>K2</th>
                    <th>K3</th>
                    <th>K4</th>
                    <th>Total</th>
                    <th>Ranking</th>
                </tr>
                </thead>
                <tbody>
                {#each analisa as item, key}
                    <tr>
                        <td>{item.kode}</td>
                        <td>{item.nama}</td>
                        <td>{Math.round(item.k1 * 100) / 100}</td>
                        <td>{Math.round(item.k2 * 100) / 100}</td>
                        <td>{Math.round(item.k3 * 100) / 100}</td>
                        <td>{Math.round(item.k4 * 100) / 100}</td>
                        <td>{Math.round(item.total * 1000) / 1000}</td>
                        <td><ButtonComponent text="{++key}" color={key < 4 ? 'bg-primary' : key <= 4 || key <= 10 ? 'bg-warning' : 'bg-danger' } /></td>
                    </tr>
                {/each}
                </tbody>
            </table>
            <PaginationComponent totalPage={pageData} indexPage={indexPage} />
        </slot>
    </CardComponents>
</div>

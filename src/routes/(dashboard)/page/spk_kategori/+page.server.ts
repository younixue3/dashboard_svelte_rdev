import PocketBase from "pocketbase";
import {error} from "@sveltejs/kit";
import type {Actions} from './$types';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function load() {
    try {
        const record = await pb.collection('kategori').getFullList()
        return {record}
    } catch (e: any) {
        throw error(e)
    }
}

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        const record = await pb.collection('kategori').create(data);
        // await pb.collection('kategori').getFullList()
        //     .then((resp) => {
        //         console.log(resp)
        //         resp.forEach((item) => {
        //             const datas = {
        //                 "x_relation": item.id,
        //                 "y_relation": record.id,
        //                 "r_index": 0
        //             };
        //             pb.collection('kategori_ahp_collection').create(datas);
        //         })
        //     })

        // const record = await pb.collection('kategori_ahp_collection').create(data);
    },
    create_bobot_kategori: async ({request}) => {
        const data = await request.formData();
        // await pb.collection('bobot_kategori').create(data);
        // pb.collection('bobot_kategori').getFullList({filter: 'id_kategori = "adnznzxov9cjnqt"'})
        //     .then((resp) => {
        //         console.log(resp)
        //         resp.forEach((item, index) => {
        //             const data = {
        //                 "bobot": resp.length - index / resp.length * 100,
        //             };
        //             pb.collection('bobot_kategori').update(item.id, data)
        //         })
        //     })
    }
} satisfies Actions;
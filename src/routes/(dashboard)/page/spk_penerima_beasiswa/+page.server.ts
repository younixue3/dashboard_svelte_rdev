import PocketBase from "pocketbase";
import {error} from "@sveltejs/kit";
import type { Actions } from './$types';

const pb = new PocketBase('http://127.0.0.1:8090');

// const record = await pb.collection('mahasiswa').getOne('fy2bll248yql1bi', {
//     expand: 'relField1,relField2.subRelField',
// });
export async function load() {

    try {
        const record = await pb.collection('mahasiswa').getFullList()
        return {record}
    } catch (e) {
        throw error(e)
    }
}

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        await pb.collection('mahasiswa').create(data);
    }
} satisfies Actions;
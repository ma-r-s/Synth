import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';
const pb = new PocketBase('https://ma-r-s.fly.dev');

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			const record = await pb.collection('users').create(data);
			console.log(record);
		} catch (error) {
			return error.response.data;
		}
		throw redirect(303, '/');
	}
};

import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';
const pb = new PocketBase('https://ma-r-s.fly.dev');

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			const authData = await pb
				.collection('users')
				.authWithPassword(data.get('user'), data.get('password'));

			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.model.id);
		} catch (error) {
			console.log(error);
			console.log(error.response);
			return error.response;
		}
		throw redirect(303, '/dashboard');
	}
};

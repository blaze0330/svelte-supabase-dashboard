import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	const user = session?.user;
	return user;
};


export const actions: Actions = {
	save: async ({ request, locals: { supabase } }) => {

		const form_data = await request.formData();
		const user_name = form_data.get('user_name');
		console.log('SAVING ', user_name);

		const { data, error } = await supabase.auth.updateUser(
			{
				data: { name: user_name }
			});

		console.log(data, error);

	}
};

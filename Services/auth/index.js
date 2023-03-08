

import { signIn } from 'next-auth/react';


export const register_me = async (formData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in register (service) => ', error);
    }
}


export const logged_in = async (FormData) => {

    try {
        const { email, password } = FormData;
        const status = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });
        return status
    } catch (error) {
        console.log('error in log_in (service) => ', error);
    }

}
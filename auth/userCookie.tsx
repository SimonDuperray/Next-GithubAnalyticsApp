// @ts-ignore
import cookies from 'js-cookie';

interface SignedUser {
    displayName: string;
}

export const getUserFromCookie = () => {
    const cookie = cookies.get('auth-dpname');
    if (!cookie) {
        return;
    }
    console.log(cookie, typeof cookie);
    return cookie;
};

export const setUserCookie = (username: string) => {
    cookies.set('auth-dpname', username, {
        expires: 1 / 24
    });
};

export const removeUserCookie = () => cookies.remove('auth-dpname');
import {GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { setUserCookie, removeUserCookie} from "./userCookie";
import {NextRouter, useRouter} from "next/router";

export const useLogin = () => {
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const provider = new GithubAuthProvider();
    const [signedUser, setSignedUser] = useState(null);

    const login = async () => {
        // @ts-ignore
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete signup");
            }

            const user = res.user;
            setUserCookie(JSON.stringify(user.displayName));
            // @ts-ignore
            setSignedUser(user);
            setIsPending(false);
        } catch (error) {
            console.log(error);
            // @ts-ignore
            setError(error.message);
            setIsPending(false);
        }
    };
    return { login, error, isPending, signedUser };
};
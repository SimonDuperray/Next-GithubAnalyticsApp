import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const useLogout = () => {

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("user logged out")
        } catch (error) {
            // @ts-ignore
            console.log(error.message);
        }
    };

    return { logout };
};

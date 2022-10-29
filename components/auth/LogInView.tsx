import {useLogin} from "../../auth/useLogin";

const SignIn = () => {
    const { login, isPending } = useLogin();

    return (
        <div>
            <button onClick={login}>
                { isPending ? "Loading" : "Login with Github" }
            </button>
        </div>
    )
}

export default SignIn;
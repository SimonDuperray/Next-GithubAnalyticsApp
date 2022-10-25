import { useLogin } from "./useLogin";
import { useLogout } from "./useLogout";

function Home() {
    const { login, isPending } = useLogin();
    const { logout } = useLogout();
    return (
        <div className="App">
            <button className="btn" onClick={login}>
                { isPending ? "Loading..." : "Login with Github" }
            </button>
            <button className="btn" onClick={logout}>
                Log out
            </button>
        </div>
    );
}

export default Home;
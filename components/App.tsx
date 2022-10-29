import { Layout } from "antd";
import {NextRouter, useRouter} from "next/router";
import Homepage from "./Homepage";
import {useState} from "react";
import {setUserCookie} from "../auth/userCookie";

const App = () => {

    const { Content } = Layout;
    const router = useRouter();
    const [route, setRoute] = useState();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(route!=undefined){
            setUserCookie(route);
        }
        router.push("/repositories");
    }

    return (
        <Layout>
            <Content>
                <Homepage />
                <p>lorem20</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="route" onChange={(e) => { // @ts-ignore
                        setRoute(e.target.value)}} />
                    <button type="submit">Go</button>
                </form>
            </Content>
        </Layout>
    )
}

export default App;
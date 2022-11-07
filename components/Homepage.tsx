import { Layout } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { setUserCookie } from "../auth/userCookie";

const Homepage = () => {

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
            <Content className="homepage-container">
                <h1>Welcome on <span className="title-span-color">Github Analytics App</span> !</h1>
                <h2>This application will allow you to learn more about your Github repositories insights.</h2>
                <h2>By browsing on this app you will learn some details about your commit frequency, language repartition, etc.</h2>
                <h2>You just have to enter your Github username in the following form, that's it !</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="route" placeholder="Github username" onChange={(e) => { // @ts-ignore
                        setRoute(e.target.value)}} />
                    <button type="submit">Go</button>
                </form>
            </Content>
        </Layout>
    )
}

export default Homepage;

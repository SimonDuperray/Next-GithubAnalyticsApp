import ListRepositories from "../components/Repository/ListRepositories";
import {IRepository} from "../interfaces/IRepository";

function repositories({ result }: IRepository[] | any) {
    return (
        <div>
            <h1>repos page</h1>
            <ListRepositories repositories={result} />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://api.github.com/users/SimonDuperray/repos");
    const repos = await res.json();

    const interfacedRepositories: IRepository[] = [];
    for(let i=0; i<repos.length; i++) {
        let bufferRepo: IRepository = {
            id: repos[i].id,
            name: repos[i].name,
            language: repos[i].language,
            createdAt: repos[i].created_at,
            pushedAt: repos[i].pushed_at,
            nbCommits: 1
        }
        interfacedRepositories.push(bufferRepo);
    }
    return {
        props: {
            result: interfacedRepositories
        }
    }
}

export default repositories;
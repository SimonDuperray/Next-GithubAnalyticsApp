import ListRepositories from "../../components/Repository/ListRepositories";
import { IRepository } from "../../interfaces/IRepository"
import {reposList} from "../../files/reposFetched";

function index({ result }: IRepository[] | any) {
    return <ListRepositories repositories={reposList} />
}

// export async function getServerSideProps() {
//     const res = await fetch("https://api.github.com/users/SimonDuperray/repos");
//     const repos = await res.json();
//
//     const interfacedRepositories: IRepository[] = [];
//     for(let i=0; i<repos.length; i++) {
//         let bufferRepo: IRepository = {
//             id: repos[i].id,
//             name: repos[i].name,
//             language: repos[i].language,
//             createdAt: repos[i].created_at.substring(0, 10),
//             pushedAt: repos[i].pushed_at.substring(11, 19)
//         }
//         interfacedRepositories.push(bufferRepo);
//     }
//     return {
//         props: {
//             result: interfacedRepositories
//         }
//     }
// }

export default index;
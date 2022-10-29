import ListRepositories from "../components/Repository/ListRepositories";
import {reposList} from "../files/reposFetched"

function repositories() {
    return (
        <div>
            <h1>repos page</h1>
            <ListRepositories repositories={reposList} />
        </div>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch("https://api.github.com/users/SimonDuperray/repos", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'per_page': '100'
//         }
//     });
//     const data = await res.json();
//     return {
//         props: {
//             result: data
//         }
//     }
// }

export default repositories;
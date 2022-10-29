import ViewRepository from "./ViewRepository";
import { Repository} from "../../interfaces/repositoriesInterfaces";

interface ListRepositoriesProps {
    repositories: Repository[]
}

// @ts-ignore
const ListRepositories = (props: ListRepositoriesProps | any) => {
    return (
        <div>
            {props.repositories.map((repo: Repository) => {
                return (
                    <div key={repo.id}>
                        <ViewRepository id={repo.id} name={repo.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default ListRepositories;
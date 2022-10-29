import ViewRepository from "./ViewRepository";
import { IRepository} from "../../interfaces/IRepository";

interface ListRepositoriesProps {
    repositories: IRepository[]
}

// @ts-ignore
const ListRepositories = (props: ListRepositoriesProps | any) => {
    return (
        <div>
            {props.repositories.map((repo: IRepository) => {
                return (
                    <div key={repo.id}>
                        <ViewRepository
                            id={repo.id}
                            name={repo.name}
                            language={repo.language}
                            createdAt={repo.createdAt}
                            pushedAt={repo.pushedAt}
                            nbCommits={repo.nbCommits}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ListRepositories;
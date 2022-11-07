import { IRepository } from "../../interfaces/IRepository";

const DetailsRepositories = (repo: IRepository | any) => {
    return (
        <div className="details-repo-container">
            <h1>{repo.id}</h1>
        </div>
    )
}

export default DetailsRepositories;
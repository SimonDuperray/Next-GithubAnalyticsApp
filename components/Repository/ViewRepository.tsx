import Link from "next/link";
import { Repository } from "../../interfaces/repositoriesInterfaces";

const ViewRepository = (props: Repository) => {
    return (
        <div className="repo-card" key={props.id}>
            <h1>
                <Link href={'/repository/'+props.id} key={props.id}>
                    {props.name}
                </Link>
            </h1>
        </div>
    )
}

export default ViewRepository;
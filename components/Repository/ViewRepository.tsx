import Link from "next/link";
import { IRepository } from "../../interfaces/IRepository";

const ViewRepository = (props: IRepository) => {
    return (
        <div className="repo-card" key={props.id}>
            <h1>
                <Link href={'/repositories/'+props.id} key={props.id}>
                    {props.name}
                </Link>
                <p>Details</p>
                <ul>
                    <li>Language(s): {props.language}</li>
                    <li>Created at: {props.createdAt}</li>
                    <li>Last push at: {props.pushedAt}</li>
                </ul>
            </h1>
        </div>
    )
}

export default ViewRepository;
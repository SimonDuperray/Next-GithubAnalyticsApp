import { reposList } from "../../files/reposFetched"
import DetailsRepositories from "../../components/Repository/DetailsRepositories";
import {IRepository} from "../../interfaces/IRepository";

export const getStaticPaths = () => {
    const paths = reposList.map(repo => {
        return {
            params: {
                id: repo.id.toString()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (context: { params: { id: any; }; }) => {
    const id = context.params.id;
    let repo = null;

    for(let i=0; i<reposList.length; i++) {
        if(reposList[i].id==id){
            repo =reposList[i];
            break;
        }
    }
    return {
        props: { repo: repo }
    }
}

const Details = ({ repo }: IRepository | any) => {
    return (
        <div>
            <h1>{repo.id}</h1>
        </div>
    )
}

export default Details;
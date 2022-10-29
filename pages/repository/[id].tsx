import { reposList } from "../../files/reposFetched"

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

export const getStaticProps = (context) => {
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

const Details = ({ repo }) => {
    return (
        <div>
            <h1>Details page of {repo.name}</h1>
            <p>{ repo.fullname }</p>
            <p>{ repo.size }</p>
        </div>
    )
}

export default Details;
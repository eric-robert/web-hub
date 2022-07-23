import {useParams} from "react-router-dom";
import DocumentIndex from "../content/DocumentIndex";

export default function () {

    let params = useParams();
    const id = params.id;
    
    return <DocumentIndex id={id} />
    
        
}


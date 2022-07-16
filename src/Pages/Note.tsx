import { Center, SplitVertical } from "../Library"
import { Header, Footer, Post} from "../Components"
import { useParams } from "react-router-dom";

export default function About() {

    window.document.title = "Notes - Web Hub"

    let params = useParams();
    let post = params.post;

    return <Center width={1000}>
        <Header/>
        <Post postName={post}/>
        <Footer/>
    </Center>

}
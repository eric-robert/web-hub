import { Center, SplitVertical } from "../Library"
import { Header, Footer, Post, PostLink} from "../Components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type PostMetaData = {
    title: string
    path: string
}

export default function About() {

    window.document.title = "Notes - Web Hub"

    const [posts, setPosts] = useState<PostMetaData[]>(undefined);

    useEffect(() => {
        fetch("/web-hub/posts/index.json")
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    if ( posts === undefined ) {
        return <div>loading</div>
    }

    const postLinks = posts.map(post => {
        return <PostLink 
            key={post.path}
            icon="📝"
            tags={["notes"]}
            title={post.title}
            path={post.path}
            date={new Date().toLocaleDateString()}
        />
    });
    

    return <Center width={1000}>
        <Header/>
         {postLinks}
        <Footer/>
    </Center>

}
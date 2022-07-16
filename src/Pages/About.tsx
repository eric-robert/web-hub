import { Center, SplitVertical } from "../Library"
import { Header, Footer, Post } from "../Components"

export default function About() {

    window.document.title = "About - Web Hub"

    
    return <Center width={1000}>
        <Header/>
        <Footer/>
    </Center>


}
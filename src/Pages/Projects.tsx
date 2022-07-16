import { Center, SplitVertical } from "../Library"
import { Header, Footer } from "../Components"

export default function About() {

    window.document.title = "Projects - Web Hub"

    return <Center width={1000}>
        <Header/>
        <Footer/>
    </Center>

}
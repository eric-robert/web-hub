import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
    postName: string,
}

export default function Post ( props : Props) {

    const [postContent, setPostContent] = useState('')

    useEffect(() => {
        fetch(`/web-hub/posts/${props.postName}`)
            .then(response => response.text())
            .then(text => setPostContent(text))
    });

    if ( postContent === '' ) {
        return <div>Loading...</div>
    }

    if (postContent.startsWith('<!DOCTYPE html>')) {
        return <div>404</div>
    }

    return <div>
        <ReactMarkdown children={postContent} />
    </div>



}
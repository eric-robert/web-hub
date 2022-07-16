import { CSSProperties, useEffect, useState } from 'react'
import { MouseTracker } from '../../Library'
import { Color } from '../../Assets'
import './Post.css'
import { useNavigate } from 'react-router-dom'

type Props = {
    icon: string,
    tags: string[],
    title: string,
    path: string,
    date: string,
}

export default function PostLink ( props : Props) {

    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const style = {
        backgroundColor : isHovering ? Color.accent : Color.backgroundGrey,
    } as CSSProperties

    const styleTracker = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    } as CSSProperties

    const select = () => {
        navigate(`/web-hub/notes/${props.path}.md`);
    }

    return <div className='PostLink-Container' style={style}>
        <MouseTracker changeHover={setIsHovering} style={styleTracker} onClick={select} >
            <div className='PostLink-Icon'>{props.icon}</div>
            <div className='PostLink-Title'>{props.title}</div>
            <div className='PostLink-Tags'>{props.tags}</div>
            <div className='PostLink-Date'>{props.date}</div>
        </MouseTracker>
    </div>


}
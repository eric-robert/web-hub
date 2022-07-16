import { CSSProperties, ReactNode, useState } from "react";
import './Tracking.css'


type MouseTracker = {
    changeHover ?: (hover : boolean) => void
    changeClick ?: (click : boolean) => void
    onClick ?: () => void
    children : ReactNode
    style ?: CSSProperties
}

export function MouseTracker ( props : MouseTracker ){

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    
    const changeHover = (hover : boolean) => {
        setHover(hover);
        if (props.changeHover) props.changeHover(hover);
    }
    
    const changeClick = (click : boolean) => {
        setClick(click);
        if (props.changeClick) props.changeClick(click);
        if (!click) 
            setHover(false);
    }
    
    return <div className="MouseTracker"
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
        onMouseDown={() => changeClick(true)}
        onMouseUp={() => changeClick(false)}
        onClick={props.onClick}
        style={props.style}
    >
        { props.children }
    </div>

}
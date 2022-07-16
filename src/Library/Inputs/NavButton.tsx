import React, { CSSProperties, ReactNode, useState } from "react";
import { Color } from '../../Assets';
import './Button.css'
import { MouseTracker } from "./Tracking";
import { useNavigate } from 'react-router-dom'

type NavButtonProps = {
    text : string
    target : string
}

export default function NavButton ( props : NavButtonProps ) {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    const onPage = props.target === window.location.pathname;

    const onClick = () => {
        navigate(props.target);
    }

    const style = {
        color: Color.primary,
    } as CSSProperties

    const indicatorStyle = {
        backgroundColor: onPage ? Color.accent : Color.background,
    }

    const textStyle = {
        color: hover ? Color.textWhite : Color.textGrey
    }

    return <MouseTracker 
        changeHover={setHover} 
        changeClick={setClick} 
        onClick={onClick}>

        <div className="Button" style={style}>
            <div className="Button-Indicator" style={indicatorStyle} />
            <div className="Button-Text" style={textStyle}> { props.text } </div>
        </div>

    </MouseTracker>

}

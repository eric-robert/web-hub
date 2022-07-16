import React, { CSSProperties, ReactNode, useState } from "react";
import { Color } from '../../Assets';
import './Button.css'
import { MouseTracker } from "./Tracking";
import { useNavigate } from 'react-router-dom'

type NavButtonProps = {
    text : string
    target : string
}

export default function FooterButton ( props : NavButtonProps ) {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(props.target);
    }

    const style = {
        color: Color.textGrey,
    } as CSSProperties

    return <div className="Button-footer" style={style} onClick={onClick}>
        { props.text }
    </div>


}

import React, { CSSProperties, ReactNode } from "react";
import { MouseTracker } from "../Inputs/Tracking";
import './Image.css'

type ImageProps = {
    src : string
    height ?: string | number
    link ?: string
}

export default function Image ( props : ImageProps ) {
    
    return <MouseTracker
        onClick={() =>  window.location.href = props.link }>
        <img className="Image" src={props.src} style={{height: props.height}} />
    </MouseTracker>

}
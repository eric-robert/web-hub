import React, { CSSProperties, ReactNode } from "react";
import './Layout.css'

type AbsoluteProps = {

    children : ReactNode
    left ?: String | Number,
    top ?: String | Number,
    right ?: String | Number,
    bottom ?: String | Number,
    width ?: String | Number,
    height ?: String | Number,
    
}

export function Absolute ( props : AbsoluteProps ) {

    const style = {
        left: props.left,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        width: props.width,
        height: props.height,
    } as CSSProperties

    return <div className="Layout-Absolute" style={style}>
        { props.children }
    </div>

}


type CenterProps = {
    width : number
    children : ReactNode
}

export function Center ( props : CenterProps ) {

    const windowWidth = window.innerWidth;
    const width = Math.min(windowWidth, props.width);

    const style = {
        maxWidth: props.width,
        left : `calc(50% - ${width / 2}px)`,
    } as CSSProperties

    return <div className="Layout-Center" style={style}>
        { props.children }
    </div>
}


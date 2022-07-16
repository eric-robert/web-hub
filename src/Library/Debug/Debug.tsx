import React, { CSSProperties, ReactNode } from "react";
import './Debug.css'

export function Debug ( ) {

    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const style = {
        backgroundColor: randomColor(),
    } as CSSProperties

    return <div className="Debug" style={style} />
}
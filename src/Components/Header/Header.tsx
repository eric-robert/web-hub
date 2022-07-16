import React, { CSSProperties, ReactNode } from "react";
import "./Header.css";
import { Color } from '../../Assets'
import { Center, Left, Right, Image, NavButton } from "../../Library";

export default function Header () {

    const style = {
        backgroundColor: Color.background,
    } as CSSProperties

    return <div className="Header" style={style}>
        <div className="Header-full" style={style} />
        <Left>
            <Image src="/Logo.png" link="/" height={40}/>
        </Left>
        <Right>
            <NavButton text="About" target="/" />
            <NavButton text="Notes" target="/notes" />
            <NavButton text="Projects" target="/projects" />
        </Right>
    </div>
    

}




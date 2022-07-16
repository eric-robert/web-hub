import React, { CSSProperties, ReactNode } from "react";
import "./Footer.css";
import { Color } from '../../Assets'
import { Left, Center, Right, Image, FooterButton, SplitHorizontal } from "../../Library";

type Props = {
    title : string,
    links : {
        text : string,
        target : string,
    }[]
}

export default function FooterLinks ( props : Props) {

    const links = props.links.map( (link, index) => {
        return <FooterButton key={index} text={link.text} target={link.target} />
    })

    return <div className="Footer-links">
        <div className="Footer-links-title">{props.title}</div>
        { links } 
    </div>
    
}




import React, { CSSProperties, ReactNode } from "react";
import "./Footer.css";
import { Color } from '../../Assets'
import { Left, Center, Right, Image, SplitHorizontal } from "../../Library";
import FooterLinks from "./FooterLinks";

export default function Footer () {

    const style = {
        backgroundColor: Color.backgroundGrey,
    } as CSSProperties

    return <div className="Footer" style={style}>
        <div className="Footer-full" style={style} />
        
        <Left width={200}>
            <Center width={40}>
                <Image src="/web-hub/Logo.png" link="/" height={40}/>
            </Center>    
        </Left>

        <Right>
            <FooterLinks title="About" links={[
                { text: "About", target: "/about" },
                { text: "Contact", target: "/contact" },
                { text: "Privacy Policy", target: "/privacy" }
            ]} />
            <FooterLinks title="About" links={[
                { text: "About", target: "/about" },
                { text: "Contact", target: "/contact" },
                { text: "Privacy Policy", target: "/privacy" }
            ]} />
            <FooterLinks title="About" links={[
                { text: "About", target: "/about" },
                { text: "Contact", target: "/contact" },
                { text: "Privacy Policy", target: "/privacy" }
            ]} />
        </Right>
        
    </div>
    

}




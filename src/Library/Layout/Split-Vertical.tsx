import { ReactNode, CSSProperties } from "react"
import './Layout.css'

type SplitVerticle = {

    top : ReactNode
    bottom : ReactNode
    topHeight ?: String | Number
    bottomHeight ?: String | Number

}

export default function SplitVertical ( props : SplitVerticle ) {

    const styleTop = {
        height: props.topHeight,
    } as CSSProperties

    const styleBottom = {
        height: props.bottomHeight,
    } as CSSProperties

    return <div className="Layout-SplitVerticle">
        <div className="Layout-SplitVerticle-Top" style={styleTop}>
            { props.top }
        </div>
        <div className="Layout-SplitVerticle-Bottom" style={styleBottom}>
            { props.bottom }
        </div>
    </div>

}
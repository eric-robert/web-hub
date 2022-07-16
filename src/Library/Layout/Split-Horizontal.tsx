import { CSSProperties, ReactNode } from "react"
import './Layout.css'

type SplitHorizontal = {

    left : ReactNode
    right : ReactNode
    leftWidth ?: String | Number
    rightWidth ?: String | Number

}

export default function SplitHorizontal ( props : SplitHorizontal ) {

    const styleLeft = {
        width: props.leftWidth,
    } as CSSProperties

    const styleRight = {
        width: props.rightWidth,
    } as CSSProperties

    return <div className="Layout-SplitHorizontal">
        <div className="Layout-SplitHorizontal-Left" style={styleLeft}>
            { props.left }
        </div>
        <div className="Layout-SplitHorizontal-Right" style={styleRight}>
            { props.right }
        </div>
    </div>
    

}
import { ReactNode } from "react"
import './Layout.css'

export function Left ( props : { children : ReactNode, width ?: number } ) {
    return <div className="Layout-Left" style={{width: props.width}}>
        { props.children }
    </div>
}

export function Right ( props : { children : ReactNode, width ?: number } ) {
    return <div className="Layout-Right" style={{width: props.width}}>
        { props.children }
    </div>
}
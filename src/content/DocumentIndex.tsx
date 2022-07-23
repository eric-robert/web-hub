
interface Props {
    id : string
}

const documentsById = {
    "personal-site": <div>personal</div>
} as {[id:string] : JSX.Element}

export default function ( props : Props ) {
    return documentsById[props.id]
}
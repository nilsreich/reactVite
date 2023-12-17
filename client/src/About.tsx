import { useParams } from "@tanstack/react-router"

export const About=()=>{
    const { postId } = useParams({ strict: false })
    return (
        <div>Aout {postId}</div>
    )
}
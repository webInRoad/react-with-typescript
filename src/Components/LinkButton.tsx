import React,{useState,useEffect} from "react"
import useMousePosition from '../hooks/useMounsePosition'
// const LikeButton:React.FC = () => {
//     const [like,setLike] = useState(0)
//     return (
//         <>
//             <button onClick={() => setLike(like+1)}>
//                 {like}
//             </button>
//         </>
//     )
// }
// const LikeButton:React.FC = () => {
//     const [obj,setObj] = useState({like:0,switch:false})
//     return (
//         <>  
        
//             <button onClick={obj.switch ? () => setObj({like:obj.like+1,switch:obj.switch}) : () =>{}}>
//                 {obj.like}赞
//             </button>
//             <button onClick={() => setObj({like:obj.like,switch:!obj.switch})}>
//                 {obj.switch ? "ON":"OFF"}
//             </button>
//         </>
//     )
// }
// export default LikeButton

const LikeButton:React.FC = () => {
    const [like,setLike] = useState(0);
    const [status,toggleStatus] = useState(false)
    useEffect(() => {
        console.info("触发")
        document.title = `点击${like}次`
    },[like,status])
    const position = useMousePosition()
    return (
        <>  
            <button onClick={status ? () => setLike(like+1) : () =>{}}>
                {like}赞
            </button>
            <div>位于X:{position.x},y:{position.y}</div>
            <button onClick={() => toggleStatus(!status)}>
                {status ? "ON":"OFF"}
            </button>
        </>
    )
}
export default LikeButton
import React,{useEffect,useState} from 'react'

const MounseTracker = () => {
    const [position,setPosition] = useState({x:0,y:0})
    const updatePosition = (e:MouseEvent)=> {
        console.info("inner")
        setPosition({x:e.clientX,y:e.clientY})
    }
    useEffect(() => {
        console.info("add effect",position.x)
        document.addEventListener('click',updatePosition)
        return () => {
            console.info("remove effect",position.x)
            document.removeEventListener('click',updatePosition)
        }
    },[])
    console.info("before render",position.x);
    return (<div>位于X:{position.x},y:{position.y}</div>)
}
export default MounseTracker
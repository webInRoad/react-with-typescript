import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContxt } from '../App'
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

const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0)
	const [status, toggleStatus] = useState(false)
	// useRef 会在每次渲染时返回同一个 ref 对象
	const likeRef = useRef(0)
	const didMountRef = useRef(false)
	const domRef = useRef<HTMLParagraphElement>(null)
	useEffect(() => {
		console.info('触发')
		document.title = `点击${like}次`
	}, [like, status])
	// const position = useMousePosition()
	function handleAlertClick() {
		setTimeout(() => {
			// alert(`you clicked on ${like}`) //形成闭包，所以弹出来的是当时触发函数时的like值
			// if (domRef && domRef.current) {
			// 	//3.ref用在DOM上demo
			// 	alert(domRef.current.innerText) //全局的，就是当前的like值 可以“跨渲染周期”保存数据
			// }
			// 1.ref直接访问.current
			alert(likeRef.current)
		}, 3000)
	}
	useEffect(() => {
		// 2.利用ref的全局性，区分出来是初始化还是更新
		if (didMountRef.current) {
			console.info('this is updated')
		} else {
			didMountRef.current = true
		}
	})
	const theme = useContext(ThemeContxt)
	const style = {
		color: theme.color,
		background: theme.background
	}
	return (
		<>
			<button
				style={style}
				onClick={
					status
						? () => {
								setLike(like + 1)
								likeRef.current++
						  }
						: () => {}
				}
			>
				{like}赞
			</button>
			{/* <div>
				位于X:{position.x},y:{position.y}
			</div> */}
			<p ref={domRef}>{like}</p>
			<button onClick={() => toggleStatus(!status)}>
				{status ? 'ON' : 'OFF'}
			</button>
			<button onClick={handleAlertClick}>Alert</button>
		</>
	)
}
export default LikeButton

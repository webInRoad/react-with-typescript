import React from "react"

interface IHelloProps {
	message?:string
}
// const Hello = (props: IHelloProps) => {
// 	return <div>{props.message}</div>
// }
// const hello:React.FunctionComponent<IHelloProps> = (props) => {
// 	return <div>{props.message}</div>
// }
const hello:React.FC<IHelloProps> = (props) => {
	return <div>{props.message}</div>
}
hello.defaultProps = {
	message:'Hello World'
}
export default hello
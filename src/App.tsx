import React, { useState } from 'react'
import Hello from './Components/Hello'
import LinkButton from './Components/LinkButton'
import Mouse from './Components/Mouse'
import useMousePosition from './hooks/useMounsePosition'
// import withLoader from './Components/withLoader'
import useURLLoader from './hooks/useUrlLoader'
import logo from './logo.svg'
import './App.css'

interface IShowResult {
	message: string
	status: string
}
const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
	return (
		<>
			<h2>Dog show: {data.status}</h2>
			<img src={data.message} />
		</>
	)
}
interface IThemeProps {
	[key: string]: { color: string; background: string }
}
const thems: IThemeProps = {
	light: {
		color: '#000',
		background: '#eee'
	},
	dark: {
		color: '#fff',
		background: '#222'
	}
}
export const ThemeContxt = React.createContext(thems.light)
function App() {
	const [show, setShow] = useState(false)
	const position = useMousePosition()
	// const WrappedDogShow = withLoader(
	// 	DogShow,
	// 	'https://dog.ceo/api/breeds/image/random'
	// )
	const [
		data,
		loading
	] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
	const dogResult = data as IShowResult
	return (
		<div className="App">
			<ThemeContxt.Provider value={thems.dark}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<button onClick={() => setShow(!show)}>Toggle MouseTracker</button>
					{/* <div>
					位于X:{position.x},y:{position.y}
				</div> */}
					{/* {show && <Mouse/>} */}
					{<LinkButton />}
					{/* <WrappedDogShow /> */}
					{/* {loading ? <p>读取中</p> : <img src={dogResult.message} />}  */}
					{/* 上面一行没加dogResult判空处理，是有问题的 */}
					{/* {loading ? <p>读取中</p> : <img src={dogResult && dogResult.message} />} */}
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</ThemeContxt.Provider>
		</div>
	)
}

export default App

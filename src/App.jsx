import { useState } from 'react'

const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
			<div>Press the buttons to track clicks</div>
		)
	}

	return (
		<div>
			History: {props.allClicks}
		</div>
	)
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>	

const App = () => {

	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])
	const [total, setTotal] = useState(0)

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))	
		const updatedLeft = left + 1 // Pass updated value to state before rerender.
		setLeft(updatedLeft)
		setTotal(updatedLeft + right)
	}

	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		const updatedRight = right + 1
		setRight(updatedRight)
		setTotal(updatedRight + left)
	}

	return (
	<div>
		<Button onClick={handleLeftClick} text="Left" />
		<Button onClick={handleRightClick} text="Right" />
		<History allClicks={allClicks} />
		<p>Total: {total}</p>
	</div>
	)
}

export default App
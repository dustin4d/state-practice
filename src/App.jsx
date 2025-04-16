import { useState } from 'react'

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
		<button onClick={handleLeftClick}>Left</button>
		<button onClick={handleRightClick}>Right</button>
		<p>History: {allClicks}</p>
		<p>Total: {total}</p>
	</div>
	)
}

export default App
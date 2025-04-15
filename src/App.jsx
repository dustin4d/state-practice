import { useState } from 'react'

const App = () => {

	const [clicks, setClicks] = useState({left: 0, right: 0})

	const handleLeftClick = () => {
		const newClicks = {
			left: clicks.left + 1,
			right: clicks.right + 0
		}
		setClicks(newClicks)
	}

	const handleRightClick = () => {
		const newClicks = {
			left: clicks.left + 0,
			right: clicks.right + 1,
		}
		setClicks(newClicks)
	}

	return (
	<div>
		{clicks.left}
		<button onClick={handleLeftClick}>Left</button>
		<button onClick={handleRightClick}>Right</button>
		{clicks.right}
	</div>
	)
}

export default App
import { useState } from 'react'

const App = () => {

	const [clicks, setClicks] = useState({left: 0, right: 0})

	const handleLeftClick = () => {
		// Pull in state object properties, update the one that's needed
		setClicks({...clicks, left: clicks.left + 1})
	}

	const handleRightClick = () => {
		setClicks({...clicks, right: clicks.right + 1})
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
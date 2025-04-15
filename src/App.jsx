import { useState } from 'react'

// Concise arrow function since only one return statement
// Destructuring props
const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
	const [counter, setCounter] = useState(0)

	const increaseByOne = () => setCounter(counter + 1)
	const increaseByThree = () => setCounter(counter + 3)
	const increaseByFive = () => setCounter(counter + 5)
	const reset = () => setCounter(0)

	return (
	<div>
		<Display counter={counter}/>
		<Button onClick={increaseByOne} text="+1"></Button>
		<Button onClick={increaseByThree} text="+3"></Button>
		<Button onClick={increaseByFive} text="+5"></Button>
		<Button onClick={reset} text="Reset"></Button>
	</div>
	)
}

export default App
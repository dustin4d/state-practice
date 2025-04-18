import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10) // init state at 10

  // Event handler stuff -- condensed arrow function
  const handleClick = () => setValue(0)

  return ( 
    <div>
      {value}
      <br/>
      <button onClick={handleClick}>reset to zero</button>
    </div>
  )
}

export default App

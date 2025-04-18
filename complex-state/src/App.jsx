import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10) // init state at 10

  // Event handler stuff
  const handleClick = () => {
    return (() => setValue(0))
  }

  return ( 

    <div>
      {value}
      <button onClick={handleClick()}>reset to zero</button>
    </div>
  )
}

export default App

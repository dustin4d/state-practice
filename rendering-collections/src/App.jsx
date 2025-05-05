const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* Writing across multiple lines like this is supposedly easier to read */}
        {/* Loop the entire array */}
        {notes.map(note => 
          <li key={note.id}> {/* Avoid warnings from React, provide key value with each <li> returned  */}
            {note.content} {/* Return the string of this property */}
          </li>)}
      </ul>
    </div>
  )
}

export default App
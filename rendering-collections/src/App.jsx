const Note = ({ note }) => {
  return (
    // Create a <li> element with the content of the note inside from the `note` object passed in from props
    <li>{note.content}</li>
  )
}
const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* Writing across multiple lines like this is supposedly easier to read */}
        {/* Loop the entire array */}
        {notes.map(note => 
          /*Pass the key here, then pass the entire note object over to the component via props */
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
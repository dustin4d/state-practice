import Note from './components/Note.jsx'

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
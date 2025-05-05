const Note = ({ note }) => {
  return (
    // Create a <li> element with the content of the note inside from the `note` object passed in from props
    <li>{note.content}</li>
  )
}

export default Note
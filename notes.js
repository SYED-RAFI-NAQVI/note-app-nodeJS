console.log('notes.js started')

const fs = require('fs')

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  }
  try {
    var notesString = fs.readFileSync('notes-data.json')
    var notes = JSON.parse(notesString)
  } catch (e) {
    console.log('you got an error')
  }
  var duplicateNotes = notes.filter(note => note.title === title)
  if (duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }
}

var getAll = () => {
  console.log('getting all')
}

var getNote = () => {
  console.log('reading')
}

var removeNote = () => {
  console.log('removing')
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}

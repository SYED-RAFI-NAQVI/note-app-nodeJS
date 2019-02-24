console.log('notes.js started')

const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var savedNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter(note => note.title === title)
  if (duplicateNotes.length === 0) {
    notes.push(note)
    savedNotes(notes)
    return note
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

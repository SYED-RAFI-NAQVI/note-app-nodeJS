// var obj = {
//   name: 'andrew'
// }
//
// var stringObj = JSON.stringify(obj)
// console.log(typeof (stringObj))
// console.log(stringObj)
//
// var personString = '{"name": "rafi", "age": "19"}'
// var person = JSON.parse(personString)
// console.log(person)
const fs = require('fs')

var originalNote = {
  title: 'some title',
  body: 'some body'
}
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(note)
console.log(note.title)
console.log(originalNote)

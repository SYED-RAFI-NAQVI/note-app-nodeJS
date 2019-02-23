console.log('app.js started')

const notes = require('./notes.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

var argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('no')
}

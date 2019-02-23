console.log("notes.js started");

var addNote = (title, body) => { 
	console.log("adding" + ', ' + title + ', ' + body);
};

var getAll = () => {
	console.log('getting all');
};

var getNote = () =>{
	console.log('reading')
}

var removeNote = () =>{
	console.log('removing')
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
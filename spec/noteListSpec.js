"strict mode";

// function noteListRespondsToNotes () {
//   var noteList = new NoteList();
//   assert.hasProperty(noteList, "_notes", "'Notes' is not a valid property");
// };
//
// noteListRespondsToNotes();

function noteListHasEmptyArrayOfNotes() {
  var noteList = new NoteList();
  try {
    new Assert(Array.isArray(noteList._notes) && noteList._notes.length === 0, "Notes is not an empty array", "noteListHasEmptyArrayOfNotes").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  };
};

noteListHasEmptyArrayOfNotes();

function noteListCreatesAndSavesNote() {
  var noteList = new NoteList();
  var note = noteList.createNote("hello", 1);
  try {
    new Assert(noteList._notes[0].text === "hello", "Created note is not an instance of Note", "noteListCreatesAndSavesNote").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  };
};

noteListCreatesAndSavesNote();

function showsNotesList() {
  var noteList = new NoteList();
  noteList.createNote("Hello", 1)
  try {
    new Assert(noteList.viewNotes()[0].text === "Hello", "Array does not include text", "showsNotesList").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  };
}

showsNotesList();

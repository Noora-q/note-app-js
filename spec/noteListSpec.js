"strict mode";

function noteListRespondsToNotes () {
  var noteList = new NoteList();
  assert.hasProperty(noteList, "_notes", "'Notes' is not a valid property");
};

noteListRespondsToNotes();

function noteListHasEmptyArrayOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList._notes) && noteList._notes.length === 0, "Notes is not an empty array");
};

noteListHasEmptyArrayOfNotes();

function noteListCreatesAndSavesNote() {
  var noteList = new NoteList();
  var note = noteList.createNote("hello", 1);
  assert.isTrue(noteList._notes[0].text === "hello", "Created note is not an instance of Note");
};

noteListCreatesAndSavesNote();

function showsNotesList() {
  var noteList = new NoteList();
  noteList.createNote("Hello", 1)
  assert.isTrue(noteList.viewNotes()[0].text === "Hello", "Array does not include text")
}

showsNotesList();

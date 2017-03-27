"strict mode";

function noteListRespondsToNotes () {
  var noteList = new NoteList();

  assert.isTrue(noteList.hasOwnProperty("notes"), "'Notes' is not a valid property");
};

noteListRespondsToNotes();

function noteListHasEmptyArrayOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes) && noteList.notes.length === 0, "Notes is not an empty array");
};

noteListHasEmptyArrayOfNotes();

function noteListCreatesAndSavesNote() {
  var noteList = new NoteList();
  var note = noteList.createNote("hello");
  assert.isTrue(noteList.notes[0] instanceof Note, "Created note is not an instance of Note");
};

noteListCreatesAndSavesNote();

function noteListDisplaysNotes() {
  var noteList = new NoteList();
  var note = noteList.createNote("hello");
  var note2 = noteList.createNote("just testing");
  console.log(noteList.displayNotes())
  console.log(noteList.notes)

  assert.isTrue(noteList.displayNotes() === "hello just testing", "DisplayNotes method does not display currently stored notes");
};

noteListDisplaysNotes();

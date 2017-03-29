"strict mode";

function noteListViewCanBeInstantiated () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTypeOf(noteListView, NoteListView, "NoteListView was not instantiated")
};

function printsNotesInList(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Goodbye");

  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")
}

printsNotesInList()

function doesNotPrintListIfNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHTML() === "<ul></ul>")
}

doesNotPrintListIfNoNotes()


function printsFirstTwentyCharsOfText () {
  var noteList = new NoteList();
  noteList.createNote("Hello Hello Hello Hello");
  var noteListView = new NoteListView(noteList);
  assert.isEqual(noteListView.generateHTML(), "<ul><li><div>Hello Hello Hello He</div></li></ul>")
}

printsFirstTwentyCharsOfText ()

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

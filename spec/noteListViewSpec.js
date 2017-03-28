function printNotesInList(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Goodbye");

  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")
}

printNotesInList()

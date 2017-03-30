"strict mode";

// function noteListViewCanBeInstantiated () {
//   var noteList = new NoteList();
//   var noteListView = new NoteListView(noteList);
//   assert.isTypeOf(noteListView, NoteListView, "NoteListView was not instantiated")
// };

function generatesHTMLForNoteList(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Goodbye");

  var noteListView = new NoteListView(noteList);

  try {
    new Assert(noteListView.generateHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>", "HTML not generated", "generatesHTMLForNoteList").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  };
}

generatesHTMLForNoteList()

function generatesHTMLWhenEmptyNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView.generateHTML() === "<ul></ul>", "correct HTML not generated", "generatesHTMLWhenEmptyNoteList").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  };
}

generatesHTMLWhenEmptyNoteList()


// function printsFirstTwentyCharsOfText () {
//   var noteList = new NoteList();
//   noteList.createNote("Hello Hello Hello Hello");
//   var noteListView = new NoteListView(noteList);
//   assert.isEqual(noteListView.generateHTML(), "<ul><li><div>Hello Hello Hello He</div></li></ul>")
// }
//
// printsFirstTwentyCharsOfText ()

"strict mode";

function noteListViewCanBeInstantiated () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView, "NoteListView was not instantiated", "noteListViewCanBeInstantiated").isTypeOf(NoteListView);
  }
  catch(err) {
    console.log(err.errorMessage);
  }
}

noteListViewCanBeInstantiated();

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
  }
}

generatesHTMLForNoteList();

function generatesHTMLWhenEmptyNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView.generateHTML() === "<ul></ul>", "correct HTML not generated", "generatesHTMLWhenEmptyNoteList").isTrue();
  }
  catch(err) {
    console.log(err.errorMessage);
  }
}

generatesHTMLWhenEmptyNoteList();


function printsFirstTwentyCharsOfText () {
  var noteList = new NoteList();
  noteList.createNote("Hello Hello Hello Hello");
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView.generateHTML(), "View did not print first 20 characters", "printsFirstTwentyCharsOfText", "<ul><li><div>Hello Hello Hello He</div></li></ul>").isEqual();
  }
  catch(err) {
    console.log(err.errorMessage);
  }
}

printsFirstTwentyCharsOfText();

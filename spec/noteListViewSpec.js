"strict mode";

function noteListViewCanBeInstantiated () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView, "NoteListView was not instantiated", "noteListViewCanBeInstantiated").isTypeOf(NoteListView);
  }
  catch(err) {
    console.log(err.message);
  }
}

noteListViewCanBeInstantiated();

function generatesHTMLForNoteList(){
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Goodbye");

  var noteListView = new NoteListView(noteList);

  try {
    new Assert(noteListView.generateHTML() === "<ul><li><div><a href=\"#notes/1\">Hello</a></div></li><li><div><a href=\"#notes/2\">Goodbye</a></div></li></ul>", "HTML not generated", "generatesHTMLForNoteList").isTrue();
  }
  catch(err) {
    console.log(err.message);
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
    console.log(err.message);
  }
}

generatesHTMLWhenEmptyNoteList();


function printsFirstTwentyCharsOfText () {
  var noteList = new NoteList();
  noteList.createNote("Hello Hello Hello Hello");
  var noteListView = new NoteListView(noteList);
  try {
    new Assert(noteListView.generateHTML(), "View did not print first 20 characters", "printsFirstTwentyCharsOfText", "<ul><li><div><a href=\"#notes/1\">Hello Hello Hello He</a></div></li></ul>").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

printsFirstTwentyCharsOfText();

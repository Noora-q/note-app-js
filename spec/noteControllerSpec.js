"strict mode";

function NoteListDouble() {
  this.createNoteCallCount = 0;
}

NoteListDouble.prototype = {
  createNote: function() {
    this.createNoteCallCount++;
  },
  viewNotes: function() {
    return ["hello"];
  }
};

function HTMLDouble() {
  this.innerHTML = "";
}

function ViewDouble() {}
ViewDouble.prototype = {
  generateHTML: function() {
    return "html";
  }
};

function noteControllerCanBeInstantiated () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller, "NoteController was not instantiated", "noteControllerCanBeInstantiated").isTypeOf(NoteController);
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerSavesNotelist () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller.noteList, "NoteController does not save notelist as property", "noteControllerSavesNotelist", noteListDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerAddsNoteToNoteList () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  controller.addNote("Hello");
  try {
    new Assert(noteListDouble.createNoteCallCount, "Note not added to note list", "noteControllerAddsNoteToNoteList", 1).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerCreatesNoteListView () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller.view.noteList, "Note list view not created", "noteControllerCreatesNoteListView", noteListDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerInsertsHtml () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  var divDouble = new HTMLDouble();
  controller.view = new ViewDouble(noteListDouble);
  controller.addHTML(divDouble);

  try {
    new Assert(divDouble.innerHTML, "HTML not added to page", "noteControllerInsertsHtml", "html").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}


noteControllerCanBeInstantiated ();
noteControllerSavesNotelist ();
noteControllerAddsNoteToNoteList();
noteControllerCreatesNoteListView();
noteControllerInsertsHtml();

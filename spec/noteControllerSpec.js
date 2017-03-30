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

// function DivDouble() {
//   this.innerHtmlCallCount = 0;
//   this.id = "app"
// };
//
// DivDouble.prototype = {
//   innerHtml: function() {
//     this.innerHtmlCallCount++;
//   }
// };


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

// function noteControllerInsertsHtml () {
//   var noteListDouble = new NoteListDouble();
//   var controller = new NoteController(noteListDouble);
//   var div = new DivDouble();
//   controller.createView();
//   console.log(document.getElementById("app"))
//   controller.addHTML()
//   assert.isEqual(div.innerHtmlCallCount, 1)
// };


noteControllerCanBeInstantiated ();
noteControllerSavesNotelist ();
noteControllerAddsNoteToNoteList();
noteControllerCreatesNoteListView();

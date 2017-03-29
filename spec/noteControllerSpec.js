"strict mode";

// (function(exports) {
//   function Test () {
//   }

//   exports.Test = {
//     noteControllerCanBeInstantiated: noteControllerCanBeInstantiated
//   }
// })(this);


function NoteListDouble() {
  this.createNoteCallCount = 0;
};

NoteListDouble.prototype = {
  createNote: function() {
    this.createNoteCallCount++;
  },
  viewNotes: function() {
    return ["hello"]
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
  function NoteListDouble() {};
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  assert.isTypeOf(controller, NoteController, "NoteController was not instantiated")
};

function noteControllerSavesNotelist () {
  function NoteListDouble() {};
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  assert.isSameObject(controller.noteList, noteListDouble, "NoteController does not save notelist as property");
};


function noteControllerAddsNoteToNoteList () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  controller.addNote("Hello")
  assert.isEqual(noteListDouble.createNoteCallCount, 1)
};

function noteControllerCreatesNoteListView () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  controller.createView();
  assert.isEqual(controller.view.noteList, noteListDouble)
};

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
noteControllerAddsNoteToNoteList ()
noteControllerCreatesNoteListView ()

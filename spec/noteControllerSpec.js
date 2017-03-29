"strict mode";

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
  function NoteListDouble() {
    this.createNoteCallCount = 0;
  };
  NoteListDouble.prototype = {
    createNote: function() {
      this.createNoteCallCount++;
    }
  };

  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  controller.addNote("Hello")
  assert.isEqual(noteListDouble.createNoteCallCount, 1)
};

noteControllerCanBeInstantiated ();
noteControllerSavesNotelist ();
noteControllerAddsNoteToNoteList ()

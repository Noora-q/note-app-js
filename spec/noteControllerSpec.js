"strict mode";

function noteControllerCanBeInstantiated () {

  function NoteListDouble() {};

  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);

  assert.isTrue(controller instanceof NoteController, "NoteController was not instantiated")

};

noteControllerCanBeInstantiated ();

function noteControllerSavesNotelist () {

  function NoteListDouble() {};

  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);

  assert.isTrue(controller.noteList === noteListDouble, "NoteController does not save notelist as property")

};

noteControllerSavesNotelist ();

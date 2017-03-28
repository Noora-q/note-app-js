"strict mode";

function noteControllerCanBeInstantiated () {

  var noteList = new NoteList();
  var controller = new NoteController(noteList);

  assert.isTrue(controller instanceof NoteController, "NoteController was not instantiated")

};

noteControllerCanBeInstantiated ();

function noteControllerAddsInnerHTMLToView () {

  var noteList = new NoteList();
  var controller = new NoteController(noteList);

  assert.isTrue(controller.noteList === noteList, "NoteController does not save notelist as property")

};

noteControllerAddsInnerHTMLToView ();

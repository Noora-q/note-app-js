"strict mode";

function noteControllerCanBeInstantiated () {

  var controller = new NoteController();

  assert.isTrue(controller instanceof NoteController, "noteController was not instantiated")

};

noteControllerCanBeInstantiated ()

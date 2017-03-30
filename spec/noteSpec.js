"strict mode";

function noteRespondsToText () {
  var note = new Note("hello", 1);
  try {
    new Assert(note.hasOwnProperty("text"), "'Text' is not a valid property", "noteRespondsToText").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

noteRespondsToText();

function noteSavesText () {
  var text = "hello";
  var note = new Note(text, 1);

  try {
    new Assert(note.text, "Text is not saved", "noteSavesText", text).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

noteSavesText();

function noteIsInstantiatedWithId () {
  var id = 1;
  var text = "hello";
  var note = new Note(text, id);

  try {
    new Assert(note.id, "ID is not saved", "noteIsInstantiatedWithId", id).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

noteIsInstantiatedWithId ();

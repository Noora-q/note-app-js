"strict mode";

function noteRespondsToText () {
  var note = new Note("hello", 1);

  assert.isTrue(note.hasOwnProperty("text"), "'Text' is not a valid property");
};


noteRespondsToText();

function noteSavesText () {
  var text = "hello"
  var note = new Note(text, 1);

  assert.isEqual(note.text, text);
};

noteSavesText();

function noteIsInstantiatedWithId () {
  var id = 1
  var text = "hello"
  var note = new Note(text, id);
  assert.isEqual(note.id, id);
}

noteIsInstantiatedWithId ()

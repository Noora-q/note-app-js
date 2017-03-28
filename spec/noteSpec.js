"strict mode";

function noteRespondsToText () {
  var note = new Note("hello");

  assert.isTrue(note.hasOwnProperty("text"), "'Text' is not a valid property");
};


noteRespondsToText();

function noteSavesText () {
  var text = "hello"
  var note = new Note(text);

  assert.isTrue(note.text === text, "Text has not been saved");
};

noteSavesText();

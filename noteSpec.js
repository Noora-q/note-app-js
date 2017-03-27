"strict mode";

function testNoteRespondsToText () {
  var note = new Note("hello");

  assert.isTrue(note.hasOwnProperty("text"), "Text is not a valid function");
};


testNoteRespondsToText()

function testNoteSavesText () {
  var text = "hello"
  var note = new Note(text);

  assert.isTrue(note.text === text, "Text has not been saved");
};

testNoteSavesText();

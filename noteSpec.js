"strict mode";

function testNoteRespondsToText () {
  var note = new Note("hello");

  if(!note.hasOwnProperty("text")) {
    throw new Error("Text is not a valid function");
  };
};


testNoteRespondsToText()

function testNoteSavesText () {
  var text = "hello"
  var note = new Note(text);

  if(note.text !== text) {
    throw new Error("Text has not been saved");
  };

};

testNoteSavesText();

"strict mode";

function NoteDouble() {
  this.text = "hello"
};

function singleNoteViewCanBeInstantiated () {
  var noteDouble = new NoteDouble
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTypeOf(singleNoteView, SingleNoteView, "SingleNoteView was not instantiated")
};


function singleNoteViewTakesNoteOnInstantiation () {
  var noteDouble = new NoteDouble
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isEqual(singleNoteView.note, noteDouble);
};

function returnsHtmlForDisplayingNoteText () {
  var noteDouble = new NoteDouble
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isEqual(singleNoteView.generateHTML(), "<div>hello</div>");
};


singleNoteViewCanBeInstantiated ()
singleNoteViewTakesNoteOnInstantiation ()
returnsHtmlForDisplayingNoteText ()

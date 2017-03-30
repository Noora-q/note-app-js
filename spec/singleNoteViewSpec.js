"strict mode";

function NoteDouble() {
  this.text = "hello";
}

function singleNoteViewCanBeInstantiated () {
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  try {
    new Assert(singleNoteView, "SingleNoteView was not instantiated", "singleNoteViewCanBeInstantiated").isTypeOf(SingleNoteView);
  }
  catch(err) {
    console.log(err.message);
  }
}


function singleNoteViewTakesNoteOnInstantiation () {
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);

  try {
    new Assert(singleNoteView.note, "Note not saved", "singleNoteViewTakesNoteOnInstantiation", noteDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function returnsHtmlForDisplayingNoteText () {
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  try {
    new Assert(singleNoteView.generateHTML(), "Correct HTML not displayed", "returnsHtmlForDisplayingNoteText", "<div>hello</div>").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}


singleNoteViewCanBeInstantiated();
singleNoteViewTakesNoteOnInstantiation();
returnsHtmlForDisplayingNoteText();

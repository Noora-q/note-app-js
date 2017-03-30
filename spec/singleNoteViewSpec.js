"strict mode";

function NoteDouble() {
  this.text = "hello";
}

// function singleNoteViewCanBeInstantiated () {
//   var noteDouble = new NoteDouble();
//   var singleNoteView = new SingleNoteView(noteDouble);
//   assert.isTypeOf(singleNoteView, SingleNoteView, "SingleNoteView was not instantiated")
// }


function singleNoteViewTakesNoteOnInstantiation () {
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);

  try {
    new Assert(singleNoteView.note, "Note not saved", "singleNoteViewTakesNoteOnInstantiation", noteDouble).isEqual();
  }
  catch(err) {
    console.log(err.errorMessage);
  }
}

function returnsHtmlForDisplayingNoteText () {
  var noteDouble = new NoteDouble();
  var singleNoteView = new SingleNoteView(noteDouble);
  try {
    new Assert(singleNoteView.generateHTML(), "Correct HTML not displayed", "returnsHtmlForDisplayingNoteText", "<div>hello</div>").isEqual();
  }
  catch(err) {
    console.log(err.errorMessage);
  }
}


// singleNoteViewCanBeInstantiated();
singleNoteViewTakesNoteOnInstantiation();
returnsHtmlForDisplayingNoteText();

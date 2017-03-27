"strict mode";

function noteListRespondsToNotes () {
  var noteList = new NoteList();

  assert.isTrue(noteList.hasOwnProperty, "'Notes' is not a valid property");
};

noteListRespondsToNotes();

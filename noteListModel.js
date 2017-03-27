"strict mode";

(function(exports) {
  function NoteList() {
    this.notes = []
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.createNote = function (text) {
  return this.notes.push(new Note(text));
};

NoteList.prototype.displayNotes = function () {
  this.notes.forEach(function(note){
    return note.text
  });
};

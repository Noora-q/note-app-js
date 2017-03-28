"strict mode";

(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.createNote = function (text) {
    return this.notes.push(new Note(text));
  };

  exports.NoteList = NoteList;
})(this);
<<<<<<< HEAD
=======

NoteList.prototype.createNote = function (text) {
  return this.notes.push(new Note(text));
};

NoteList.prototype.displayNotes = function () {
  this.notes.forEach(function(note){
    return note.text
  });
};
>>>>>>> 58d8afda028c0f7bc2190e74faef441508ae9a14

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

"strict mode";

(function(exports) {
  function NoteList() {
    this._notes = []
  };

  NoteList.prototype.createNote = function (text) {
    return this._notes.push(new Note(text));
  };

  NoteList.prototype.viewNotes = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);

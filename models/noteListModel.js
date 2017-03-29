"strict mode";

(function(exports) {
  function NoteList() {
    this._notes = []
  };

  NoteList.prototype.createNote = function (text) {
    var id = this._notes.length + 1
    return this._notes.push(new Note(text, id));
  };

  NoteList.prototype.viewNotes = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);

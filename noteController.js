"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
  };

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  exports.NoteController = NoteController;

})(this);

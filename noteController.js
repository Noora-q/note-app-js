"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
  };

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.createView = function() {
    return this.view = new NoteListView(this.noteList);
  };

  NoteController.prototype.addHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.view.generateHTML();
  };

  exports.NoteController = NoteController;

})(this);

"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(noteList);
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.addHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.view.generateHTML();
  };

  exports.NoteController = NoteController;

})(this);

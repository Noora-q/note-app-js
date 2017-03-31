"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(noteList);
    controller = this;
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.addHTML = function(element = document.getElementById("noteList")) {
    var element = element;
    element.innerHTML = this.view.generateHTML();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    controller.showNote(controller.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#notes/")[1];
  };

  NoteController.prototype.showNote = function(id) {
    document
      .getElementById("app")
      .innerHTML = this.noteList._notes[id-1].getText();
  };


  exports.NoteController = NoteController;

})(this);

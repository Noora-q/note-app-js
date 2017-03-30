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
    var element = document.getElementById("noteList");
    element.innerHTML = this.view.generateHTML();
  };



  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(note) {
    document
      .getElementById("app")
      .innerHTML = note;
  };


  exports.NoteController = NoteController;

})(this);

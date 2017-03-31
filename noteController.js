"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(noteList);
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.addHTML = function(element = document.getElementById("noteList")) {
    var element = element;
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
      .innerHTML = this.noteList._notes[0].text;
  };


  exports.NoteController = NoteController;

})(this);

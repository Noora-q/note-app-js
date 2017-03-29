"strict mode";

(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.generateHTML = function () {
    return "<ul>" + this.noteList.viewNotes().map(function(note) {
      return "<li><div>" + note.text.slice(0,20) + "</div></li>"
    }).join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);

"strict mode";

(function(exports) {
  function SingleNoteView (note) {
    this.note = note;
  }

  SingleNoteView.prototype.generateHTML = function () {
    return "<div>" + this.note.text + "</div>";
  };

exports.SingleNoteView = SingleNoteView;

})(this);

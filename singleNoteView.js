"strict mode";

(function(exports) {
  function SingleNoteView (note) {
    this.note = note
  };

exports.SingleNoteView = SingleNoteView

})(this);

SingleNoteView.prototype.generateHTML = function () {
  return "<div>" + this.note.text + "</div>"
};

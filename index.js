controller = new NoteController(new NoteList());



controller.addNote("Hello!!");
// console.log(controller.noteList);

controller.addNote("How's it going?!!");
// controller.addNote("Hi?!!");
controller.addNote("Hi my name is Bernard and I want this to be long?!!");


controller.addHTML();

controller.makeUrlChangeShowNoteForCurrentPage();

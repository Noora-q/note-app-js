var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      throw new Error(errorMessage);
    }
  }
};

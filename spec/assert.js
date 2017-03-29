var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      throw new Error(errorMessage);
    }
  },

  isEqual: function(fnToCheck, result) {
    if (fnToCheck != result) {
      throw new Error("Expected " + result + ", got " + fnToCheck);
    }
  },

  isNotEqual: function(fnToCheck, result, errorMessage) {
    if (fnToCheck == result) {
      throw new Error(errorMessage);
    }
  },

  isSameObject: function(fnToCheck, result, errorMessage) {
    if (fnToCheck !== result) {
      throw new Error(errorMessage);
    }
  },

  isDefined: function(fnToCheck, errorMessage) {
    if (fnToCheck === undefined) {
      throw new Error(errorMessage);
    }
  },

  isUndefined: function(fnToCheck, errorMessage) {
    if (fnToCheck !== undefined) {
      throw new Error(errorMessage);
    }
  },

  isTypeOf: function(instance, object, errorMessage) {
    if (!(instance instanceof object)) {
      throw new Error(errorMessage);
    }
  },

  hasProperty: function(object, property, errorMessage) {
    if (!(object.hasOwnProperty(property))) {
      throw new Error(errorMessage);
    }
  },

};

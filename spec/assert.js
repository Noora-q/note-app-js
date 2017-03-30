
function Assert(subject, errorMessage, testName, result) {
  this.subject = subject;
  this.errorMessage = errorMessage;
  this.testName = testName;
  this.result = result;
};

Assert.prototype.isTrue = function () {
  if (this.subject !== true) {
    throw new Error(this.errorMessage);
  } else {
    console.log(this.testName + " passed!");
  };
};

Assert.prototype.isEqual = function () {
  if (this.subject !== this.result) {
    throw new Error(this.errorMessage);
  } else {
    console.log(this.testName + " passed!");
  };
};






// var assert = {
//   isTrue: function(assertionToCheck, errorMessage) {
//     if (!assertionToCheck) {
//       throw new Error(errorMessage);
//     }
//   },
//
//   isEqual: function(fnToCheck, result) {
//     if (fnToCheck != result) {
//       throw new Error("Expected " + result + ", got " + fnToCheck);
//     }
//   },
// isDefined: function(fnToCheck, errorMessage) {
//   if (fnToCheck === undefined) {
//     throw new Error(errorMessage);
//   }
// },
//   isNotEqual: function(fnToCheck, result, errorMessage) {
//     if (fnToCheck == result) {
//       throw new Error(errorMessage);
//     }
//   },
//
//   isSameObject: function(fnToCheck, result, errorMessage) {
//     if (fnToCheck !== result) {
//       throw new Error(errorMessage);
//     }
//   },
//
//
//   isUndefined: function(fnToCheck, errorMessage) {
//     if (fnToCheck !== undefined) {
//       throw new Error(errorMessage);
//     }
//   },
//
//   isTypeOf: function(instance, object, errorMessage) {
//     if (!(instance instanceof object)) {
//       throw new Error(errorMessage);
//     }
//   },
//
//   hasProperty: function(object, property, errorMessage) {
//     if (!(object.hasOwnProperty(property))) {
//       throw new Error(errorMessage);
//     }
//   },
//
// };

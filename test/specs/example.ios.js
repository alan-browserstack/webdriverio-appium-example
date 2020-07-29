var assert = require("assert");

describe("iOS App Alert Button", function () {
  it("does display system level alert", function () {
    var alertButtonSelector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Alert'`;
    var alertButton = $(`-ios predicate string:${alertButtonSelector}`);
    alertButton.waitForDisplayed({ timeout: 3000 });
    alertButton.click();
  });
});

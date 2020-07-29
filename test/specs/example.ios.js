var assert = require("assert");

describe("iOS App Alert Button", function () {
  it("does display system level alert", function () {
    var alertButtonSelector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Alert'`;
    var alertButton = $(`-ios predicate string:${alertButtonSelector}`);
    alertButton.waitForDisplayed({ timeout: 3000 });
    alertButton.click();

    var alertBodyTextSelector = `type == 'XCUIElementTypeStaticText' && name CONTAINS 'This is a native alert.'`;
    var alertBodyText = $(`-ios predicate string:${alertBodyTextSelector}`);
    alertBodyText.waitForDisplayed({ timeout: 3000 });
  });
});

var assert = require("assert");

describe("Search Wikipedia Functionality", function () {
  it("can find search results", function () {
    var searchElement = $("~Search Wikipedia");
    searchElement.waitForDisplayed({ timeout: 3000 });
    searchElement.click();
    // browser.waitForDisplayed(searchSelector, 30000);
    // browser.element(searchSelector).click();

    var insertTextElement = $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")'
    );
    insertTextElement.waitForDisplayed({ timeout: 3000 });
    insertTextElement.setValue("BrowserStack");
    browser.pause(5000);
    browser.pressKeyCode(66); // Press enter key https://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_ENTER

    // 'new UiSelector().text("Cancel")
    var quickFactsElement = $(
      'android=new UiSelector().text("Quick facts: Type, Founded ...").className("android.view.View")'
    );
    quickFactsElement.waitForDisplayed({ timeout: 3000 });
    quickFactsElement.click();

    var foundersCellElement = $(
      'android=new UiSelector().text("Ritesh Arora, Nakul Aggarwal").className("android.view.View")'
    );
    foundersCellElement.waitForDisplayed({ timeout: 3000 });
    // var searchContainerElement = $("org.wikipedia.alpha:id/search_container");
    // browser.waitForDisplayed(insertTextSelector);
    // browser.element(insertTextSelector).keys("BrowserStack").pause(5000);

    // var allProductsName = browser.elements(`android.widget.TextView`).value;
    // assert(allProductsName.length > 0);
  });
});

# webdriverio-appium-example

[WebdriverIO](http://webdriver.io/) based Appium Tests for the Android and iOS BrowserStack Sample Apps
to demonstrate integration with BrowserStack and parallel testing.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Usage

- Clone the repository.
- Make sure your env variables are set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESSKEY`
- To run iOS tests on BrowserStack: `npm run ios`
- To run android tests on BrowserStack: `npm run android`

The configurations for these tests can be found in `wdio.android.conf.js` and `wdio.ios.conf.js`.

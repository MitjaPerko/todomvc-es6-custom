require('chromedriver');
import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
const {assert} = chai

import config from './config.js'

const setupDriver = function () {
	webdriver.promise.USE_PROMISE_MANAGER = false

	const options = new chrome.Options().addArguments(
		process.env.CI ? 'headless' : '',
		'disable-gpu',
		'ignore-certificate-errors',
		'no-sandbox',
		'window-size=1420,800',
		'disable-extensions',
		'disable-dev-shm-usage'
	);

	return new webdriver.Builder()
		.setChromeOptions(options)
		.forBrowser('chrome')
		.build();
}

export default function init(){
  return {
    assert,
    config,
    driver: setupDriver()
  }
}

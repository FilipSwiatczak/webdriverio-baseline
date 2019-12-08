import {Given} from 'cucumber';
import {When} from 'cucumber';
import {Then} from 'cucumber';
import {expect} from 'chai';
import GoogleCheck from "src/page-objects/google-check.po";

let searchCriteria;

Given(/^I open google search$/, function () {
    browser.url('/');
});
When(/^I enter "([^"]*)" as search criteria$/, function (text: string) {
    GoogleCheck.field.search.send(text);
    searchCriteria = text;
});
When(/^press search$/, function () {
    GoogleCheck.button.search.click();
    GoogleCheck.results.stats.awaitVisibility();
});
Then(/^webdriver IO website is the first result$/, function () {
    expect(GoogleCheck.results.firstResult.getText()).to.contain(searchCriteria);
});
import {Given} from 'cucumber';
import {When} from 'cucumber';
import {Then} from 'cucumber';
import {expect} from 'chai';
import DropdownShowcase from "src/page-objects/dropdown-showcase.po";

Given(/^I open automation practice$/, function () {
    browser.url('http://automationpractice.com/');
});
When(/^I click on T-shirts$/, function () {
    DropdownShowcase.button.tShirts.click();
});
When(/^I select "([^"]*)" from sort by using selectText$/, function (option: string) {
    DropdownShowcase.container.tShirtsLogo.awaitVisibility();
    DropdownShowcase.dropdown.sortBy.selectText(option);
});
When(/^I select "([^"]*)" from sort by using value attribute$/, function (option: string) {
    DropdownShowcase.container.tShirtsLogo.awaitVisibility();
    DropdownShowcase.dropdown.sortBy.selectByAttribute(option);
});
When(/^I select "(\d*)" option from sort by using selectIndex$/, function (index: number) {
    DropdownShowcase.container.tShirtsLogo.awaitVisibility();
    DropdownShowcase.dropdown.sortBy.selectIndex(index);
});
Then(/^loader spinner is visible$/, function () {
    expect(DropdownShowcase.container.loadingSpinner.isDisplayed()).to.be.true;
});





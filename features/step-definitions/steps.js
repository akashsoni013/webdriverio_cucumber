const { Given, When, Then } = require('@cucumber/cucumber');
const testdata = require('../../utils/testdata.js');
const strEmail = Math.random().toString(20).substr(2, 6).concat(testdata.emailid);;
// strEmail = strEmail.concat(testdata.emailid);

Given(/^I am on the login page$/, async function() {
    await browser.url(testdata.url);
    browser.maximizeWindow();
});

When(/^I enter email address and click create an account$/, async function() {
    (await $('.login')).click();
    await (await $('#email_create')).setValue(strEmail);
    (await $('#SubmitCreate')).click();
});

When(/^I enter personal information$/, async function() {
    await (await $('//input[@id="id_gender1"]')).click();
    await (await $('#customer_firstname')).setValue(testdata.customer_firstname);
    await (await $('#customer_lastname')).setValue(testdata.customer_lastname);
    await (await $('#passwd')).setValue(testdata.passwd);
    await (await $('#firstname')).setValue(testdata.firstname);
    await (await $('#lastname')).setValue(testdata.lastname);
    await (await $('#address1')).setValue(testdata.address1);
    await (await $('#city')).setValue(testdata.city);
    await (await $('#id_state')).selectByVisibleText(testdata.id_state);
    await (await $('#postcode')).setValue(testdata.postcode);
    await (await $('#id_country')).selectByVisibleText(testdata.id_country);
    await (await $('#phone_mobile')).setValue(testdata.phone_mobile);
    await (await $('#alias')).setValue(testdata.alias);
    await (await $('#submitAccount')).click();
});
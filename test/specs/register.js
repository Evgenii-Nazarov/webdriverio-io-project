const assert = require('assert');
const {expect} = require ('chai');

describe('register page', () => {

    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const actualTitle = browser.getTitle()
        const expectedTitle = 'Progress Monitor'
        expect(actualTitle).equal(expectedTitle )
    })

    it('should have a correct title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const actuallh1text  = $('h1').getText();
        const expectedH1Text  = 'User Register';
        expect(actuallh1text).equal(expectedH1Text)
    })

    it('should have a correct description', () => {
        browser.url('https://stage.pasv.us/user/register')
        const actual  = $('p').getText();
        const expected  = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected)
    })

    it('should have a correct submit text', () => {
        browser.url('https://stage.pasv.us/user/register')
        const actual  = $('form button').getText();
        const expected  = 'Submit';
        expect(actual).equal(expected)
    })

    it('should fill First name field', () => {
        browser.url('https://stage.pasv.us/user/register')
        const element  = $('form input[name="firstName"]');
        element.setValue("Zhenia");
    })

    it('should fill Last name field', () => {
        browser.url('https://stage.pasv.us/user/register')
        const element  = $('form input[name="lastName"]');
        element.setValue("Nazarov");
        const expected  = 'Submit';
    })

    it('should fill Phone field', () => {
        browser.url('https://stage.pasv.us/user/register')
        const element  = $('form input[name="phone"]');
        element.setValue("17775551122 ");
    })

    it('should fill select box', () => {
        browser.url('https://stage.pasv.us/user/register')
        const element  = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native')
    })

    it('should click the button', () => {
        browser.url('https://stage.pasv.us/user/register')
        const element  = $('form button[type="submit"]');
        element.click();
    })


        browser.pause(3000)
})




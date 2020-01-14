const {expect} = require ('chai');

const firstName = 'Zhenia';
const lastName = 'Nazarov';
const phone = '33434343433';
const email = Math.random() +'test1@test.com';
const password = 'tester';
const about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue enim nec imperdiet egestas. Ut egestas mauris mi, vel dictum neque auctor ac. Donec nec sapien nibh. Etiam commodo urna at sapien molestie, non egestas purus vulputate. Donec vel pellentesque metus. Donec vulputate nibh sit amet dignissim blandit. Sed bibendum.';
const goals = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('register new user', () => {

  it('should fill First name field', () => {
    browser.url('https://stage.pasv.us/user/register');
    const element  = $('form input[name="firstName"]');
    element.addValue(firstName);
  });

  it('should fill Last name field', () => {
    const element  = $('form input[name="lastName"]');
    element.addValue(lastName);
  });

  it('should fill Phone field', () => {
    const element  = $('form input[name="phone"]');
    element.addValue(phone);
  });

  it('should fill Email field', () => {
    const element  = $('form input[name="email"]');
    element.setValue(email);
  });

  it('should fill Password field', () => {
    const element  = $('form input[name="password"]');
    element.addValue(password);
  });

  it('should fill About field', () => {
    const element  = $('form textarea[name="about"]');
    element.addValue(about);
  });

  it('should fill Goals box', () => {
    const element  = $('form textarea[name="goals"]');
    element.addValue(goals);
  });

  it('should fill select box', () => {
    const element  = $('form select[name="englishLevel"]');
    element.selectByVisibleText('Zero');
  });

  it('should click the button', () => {
    const element  = $('form button[type="submit"]');
    element.click();
    browser.pause(2000);
  });

  // LOGIN PAGE

  it('should fill Email field', () => {
    const element  = $('form input[name="email"]');
    element.setValue(email);
  });

  it('should fill Password field', () => {
    const element  = $('form input[name="password"]');
    element.addValue(password);
  });

  it('should click the button', () => {
    const element  = $('form button[type="submit"]');
    element.click();
    browser.pause(2000);
  });

  // PROFILE PAGE

  it('should have the right title', () => {
    const actualTitle = $('h1').getText();
    const expectedTitle = 'You are a new user';
    expect(actualTitle).equal(expectedTitle );

  });

});




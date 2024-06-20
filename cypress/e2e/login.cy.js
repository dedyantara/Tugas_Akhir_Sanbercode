const loginPage = require('../support/pages/loginPage')
const homePage = require('../support/pages/homePage')
// const { datatestid } = require('../support/locators/loginPageLocator')
// const userData = require('../support/data-test/userData')

describe('Login', () => {

  it('Login Valid', () => {
    loginPage.visitLoginPageUrl()
    loginPage.verifyLoginPageAppears()
    loginPage.inputEmail1()
    loginPage.inputPassword1()
    loginPage.clickLoginButton()

    homePage.verifyHomePageAppears()
  })

  it('Login tidak valid - credential salah', () => {
    loginPage.visitLoginPageUrl()
    loginPage.verifyLoginPageAppears()
    loginPage.inputEmail2()
    loginPage.inputPassword1()
    loginPage.clickLoginButton()

    loginPage.alertWhenInvalid()
  })

  it('Login tidak valid - credential salah', () => {
    loginPage.visitLoginPageUrl()
    loginPage.verifyLoginPageAppears()
    loginPage.inputEmail1()
    loginPage.inputPassword2()
    loginPage.clickLoginButton()

    loginPage.alertWhenInvalid()
  })

  it('Login tidak valid - password could not be empty', () => {
    loginPage.visitLoginPageUrl()
    loginPage.verifyLoginPageAppears()
    loginPage.inputEmail1()
    loginPage.clickLoginButton()

    loginPage.alertWhenInvalid()
  })

})

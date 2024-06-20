const registerPage = require('../support/pages/registerPage')
const loginPage = require('../support/pages/loginPage')
// const { datatestid } = require('../support/locators/registerPageLocator')
// const userData = require('../support/data-test/userData')

describe('Daftar Akun', () => {

  it('Daftar Akun Valid', () => {
    loginPage.visitLoginPageUrl()
    loginPage.clickLinkDaftar()
    registerPage.verifyRegisterPageAppears()
    registerPage.inputNamaToko()
    registerPage.inputEmail1()
    registerPage.inputPassword1()
    registerPage.clickDaftarButton()

    registerPage.alertWhenValid()
  })

  it('Daftar Akun email Tidak Valid', () => {
    loginPage.visitLoginPageUrl()
    loginPage.clickLinkDaftar()
    registerPage.verifyRegisterPageAppears()
    registerPage.inputNamaToko()
    registerPage.inputEmail2()
    registerPage.inputPassword1()
    registerPage.clickDaftarButton()

    registerPage.alertWhenEmailTidakValid()
  })

  it('Daftar Akun email Kosong', () => {
    loginPage.visitLoginPageUrl()
    loginPage.clickLinkDaftar()
    registerPage.verifyRegisterPageAppears()
    registerPage.inputNamaToko()
    // registerPage.inputEmail2()
    registerPage.inputPassword1()
    registerPage.clickDaftarButton()

    registerPage.alertWhenEmailorPasswordKosong()
  })

})
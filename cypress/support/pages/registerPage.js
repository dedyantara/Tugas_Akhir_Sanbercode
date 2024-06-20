const locator = require('../locators/registerPageLocator')
const data = require('../data-test/userData')

class RegisterPage {

    async verifyRegisterPageAppears() {
        cy.xpath(locator.registerlocator.nama_toko_input).should('exist')
        // cy.xpath(locator.datatestid.daftar_button).should('exist')
    }

    async inputNamaToko() {
        cy.xpath(locator.registerlocator.nama_toko_input).type(data.user_nama_toko)
    }

    async inputEmail1() {
        cy.xpath(locator.registerlocator.email_input).type(data.user_email1)
    }

    async inputEmail2() {
        cy.xpath(locator.registerlocator.email_input).type(data.user_email2)
    }

    async inputPassword1() {
        cy.xpath(locator.registerlocator.password_input).type(data.user_password1)
    }

    async clickDaftarButton() {
        cy.xpath(locator.registerlocator.daftar_button).click()
    }

    async alertWhenValid() {
        cy.xpath(locator.registerlocator.text_alert1).should('contain', 'Toko berhasil didaftarkan')
    }

    async alertWhenEmailTidakValid() {
        cy.xpath(locator.registerlocator.text_alert2).should('contain', '"email" must be a valid email')
    }

    async alertWhenEmailorPasswordKosong() {
        cy.xpath(locator.registerlocator.text_alert2).should('contain', 'is not allowed to be empty')
    }
}

module.exports = new RegisterPage()
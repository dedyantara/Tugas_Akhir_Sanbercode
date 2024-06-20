const locator = require('../locators/loginPageLocator')
const data = require('../data-test/userData')

class LoginPage {
    async visitLoginPageUrl() {
        cy.visit('https://kasirdemo.belajarqa.com')
    }

    async verifyLoginPageAppears() {
        cy.xpath(locator.loginlocator.email_input).should('exist')
        cy.xpath(locator.loginlocator.password_input).should('exist')
        cy.xpath(locator.loginlocator.login_button).should('exist')
    }

    async inputEmail1() {
        cy.xpath(locator.loginlocator.email_input).type(data.user_email1)
    }

    async inputPassword1() {
        cy.xpath(locator.loginlocator.password_input).type(data.user_password1)
    }

    async inputEmail2() {
        cy.xpath(locator.loginlocator.email_input).type(data.user_email2)
    }

    async inputPassword2() {
        cy.xpath(locator.loginlocator.password_input).type(data.user_password2)
    }

    async inputEmail3() {
        cy.xpath(locator.loginlocator.email_input).type(data.user_email3)
    }

    async clickLoginButton() {
        cy.xpath(locator.loginlocator.login_button).click()
    }

    async alertWhenInvalid() {
        cy.xpath(locator.loginlocator.text_alert).should('exist')
    }

    async clickLinkDaftar() {
        cy.xpath(locator.loginlocator.link_daftar).click()
    }

    async clickDaftarButton() {
        cy.xpath(locator.loginlocator.daftar_button).click()
    }

}

module.exports = new LoginPage()


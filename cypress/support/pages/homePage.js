const locator = require('../locators/homePageLocator')

class HomePage {

    async verifyHomePageAppears() {
        cy.xpath(locator.homelocator.dashboard).should('exist')
    }

    async clickTombolProduk() {
        cy.xpath(locator.homelocator.produk_button).click()
    }

}

module.exports = new HomePage()

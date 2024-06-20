const locator = require('../locators/kategoriPageLocator')
const data = require('../data-test/userData')

class KategoriPage {

    async verifyKategoriPageAppears() {
        cy.xpath(locator.kategorilocator.title_kategori_page).should('contain', 'kategori')
    }
    async clickTombolTambah() {
        cy.xpath(locator.kategorilocator.tambah_button).click()
    }
    async inputNamaKategori() {
        cy.xpath(locator.kategorilocator.nama_input).type(data.nama_kategori)
    }
    async inputDeskripsiKategori() {
        cy.xpath(locator.kategorilocator.deskripsi_input).type(data.deskripsi_kategori)
    }
    async clickTombolSimpan() {
        cy.xpath(locator.kategorilocator.simpan_button).click()
    }
}

module.exports = new KategoriPage
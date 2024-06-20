const locator = require('../locators/produkPageLocator')
const data = require('../data-test/userData')

class ProdukPage {

    async verifyProdukPageAppears() {
        cy.xpath(locator.produklocator.title_produk_page).should('contain', 'produk')
    }
    async clickTombolTambah() {
        cy.xpath(locator.produklocator.tambah_button).click()
    }
    async inputNamaProduk() {
        cy.xpath(locator.produklocator.nama_input).type(data.nama_produk)
    }
    async inputDeskripsiProduk() {
        cy.xpath(locator.produklocator.deskripsi_input).type(data.deskripsi_produk)
    }
    async inputHargabeliProduk() {
        cy.xpath(locator.produklocator.harga_beli_input).type(data.hargabeli_produk)
    }
    async inputHargajualProduk() {
        cy.xpath(locator.produklocator.harga_jual_input).type(data.hargajual_produk)
    }
    async inputStokProduk() {
        cy.xpath(locator.produklocator.stok_input).type(data.stok_produk)
    }
    async clickKategoriProduk() {
        cy.xpath(locator.produklocator.klik_kategori).click()
    }
    async selectKategoriProduk() {
        cy.xpath(locator.produklocator.select_kategori).click()
    }
    async clickTombolSimpan() {
        cy.xpath(locator.produklocator.simpan_button).click()
    }
}

module.exports = new ProdukPage
const loginPage = require('../support/pages/loginPage')
const homePage = require('../support/pages/homePage')
const kategoriPage = require('../support/pages/kategoriPage')

describe('Halaman Kategori', () => {

    it('Tambah Kategori Berhasil', () => {
      loginPage.visitLoginPageUrl()
      loginPage.verifyLoginPageAppears()
      loginPage.inputEmail1()
      loginPage.inputPassword1()
      loginPage.clickLoginButton()
      homePage.verifyHomePageAppears()
      homePage.clickTombolKategori()
      kategoriPage.verifyKategoriPageAppears()
      kategoriPage.clickTombolTambah()
      kategoriPage.inputNamaKategori()
      kategoriPage.inputDeskripsiKategori()
     
      kategoriPage.clickTombolSimpan()      
    })
})
import CategoriesPage from '../../elements/pages/CategoriesPage'

describe('Categories', function() {
    const page = new CategoriesPage();

    it('Visits the Categories Page', function() {
        page.visit();
    })

    it('views list of root categories', function() {
        page.getCategories().contains('Air Curtains')
        page.getCategories().contains('Watches')
    })
  })
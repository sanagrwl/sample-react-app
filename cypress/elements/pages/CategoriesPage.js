class CategoriesPage {
  
  visit() {
    cy.visit('localhost:3000');
  }
  
  getCategories() {
    return cy.get('li')
  }
}

export default CategoriesPage;
describe('My First Test', function() {
    it('Visits the HomePage', function() {
        cy.visit('localhost:3000')
    })

    it('views list of root categories', function() {
        cy.contains("Watches")
        cy.contains("Air Curtains")
    })
  })
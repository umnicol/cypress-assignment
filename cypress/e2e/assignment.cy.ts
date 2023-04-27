// We need this empty export to silence a module error
export {};

// https://cph-mtnl.github.io/business-card/

describe("Your Wash World E2E assignment", () => {
  it("passes", () => {
    cy.visit("https://wash-world-nextjs.vercel.app/");
    cy.get("h1").should("contain.text", "Velkommen til Wash World"); 
    cy.get("p").should("contain.text", "Vælg den lokation du ønsker at starte en vask ved"); 

    // for checking the amount of buttons and maintenance
    cy.get(".WWButton_button__kzXWn").should("have.length", 4);
    cy.get(":disabled").should("contain.text", "Closed for maintenance");

    // for the first location 
    cy.contains("Dynamovej 10").click();
    cy.get("h1").should("contain.text", "Program");
    cy.get("p").should("contain.text", "Vælg det ønskede program"); 
    cy.get(".WWButton_button__kzXWn").should("have.length", 4);

    // for the second locatin 
    cy.visit("https://wash-world-nextjs.vercel.app/");
    cy.contains("Dynamovej 22").click();
    cy.get("h1").should("contain.text", "Program");
    cy.get("p").should("contain.text", "Vælg det ønskede program"); 
    cy.get(".WWButton_button__kzXWn").should("have.length", 4);

    // for the third location 
    cy.visit("https://wash-world-nextjs.vercel.app/");
    cy.contains("Køgevej 198").click();
    cy.get("h1").should("contain.text", "Program");
    cy.get("p").should("contain.text", "Vælg det ønskede program"); 
    cy.get(".WWButton_button__kzXWn").should("have.length", 4);
  });

    // for the countdown but I could not really make it work

  it('displays the countdown timer', () => {
    cy.intercept('POST', 'https://wash-world-nextjs.vercel.app/wash', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          countdown: 10,
        },
      })
    })
  
    cy.visit('https://wash-world-nextjs.vercel.app/');
    cy.contains("Dynamovej 10").click();
    cy.get(".WWButton_button__kzXWn").contains("Basis").click();
    cy.get('h1').should('have.text', 'Tid tilbage 0:10');
  });
 });


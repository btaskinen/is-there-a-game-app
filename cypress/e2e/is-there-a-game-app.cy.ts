/// <reference types="cypress" />

describe('Is There A Game App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Visit start page', () => {
    cy.get('[data-cy="app-title"]').contains('Is There A Game Today?');
    cy.get('[data-cy="ilves-logo"]').should(
      'have.attr',
      'src',
      'https://upload.wikimedia.org/wikipedia/fi/5/52/Tampereen_Ilveksen_logo.svg'
    );
    cy.get('[data-cy="tappara-logo"]').should(
      'have.attr',
      'src',
      'https://upload.wikimedia.org/wikipedia/fi/3/32/Tapparan_logo.svg'
    );
    cy.get('[data-cy="start-view-button"]')
      .children()
      .should('have.class', 'StartView_svg');
  });

  it('click question mark button', () => {
    cy.get('[data-cy="start-view-button"]').click();
    cy.get('[data-cy="app-title"]').contains('Is There A Game Today?');
    cy.get('[data-cy="back-button"]').should('have.text', 'Check again!');
  });

  it('result page on game day', () => {
    cy.clock(Date.UTC(2023, 9, 14));
    cy.get('[data-cy="start-view-button"]').click();
    cy.get('[data-cy="result-text"]').should(
      'have.text',
      'There is a Game Today.'
    );
    cy.get('[data-cy="game-details"]').should(
      'have.text',
      'Tappara plays KooKoo at 17:00'
    );
    cy.get('[data-cy="result-container"]')
      .children()
      .should('have.class', 'game');
  });

  it('result page on game day', () => {
    cy.clock(Date.UTC(2023, 9, 15));
    cy.get('[data-cy="start-view-button"]').click();
    cy.get('[data-cy="result-text"]').should('have.text', 'No game Today!');
    cy.get('[data-cy="game-details"]').should('not.exist');
    cy.get('[data-cy="result-container"]')
      .children()
      .should('have.class', 'noGame');
  });

  it.only('date picker selects correct date', () => {
    cy.get('[data-cy="date-picker"]').type('2023-11-23').click();
    cy.get('[data-cy="app-title"]').contains('Is There A Game on 23.11.2023?');
    cy.get('[data-cy="start-view-button"]').click();
    cy.get('[data-cy="result-text"]').should(
      'have.text',
      'There is a Game Today.'
    );
    cy.get('[data-cy="game-details"]').should(
      'have.text',
      'Ilves plays Jukurit at 18:30'
    );
  });
});

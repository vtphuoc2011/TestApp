/// <reference types="cypress" />

// Required for JIT in NG-7
import 'core-js/es7/reflect';

/* eslint-env mocha */
/* global cy */
describe('AppComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('works', () => {
    cy.contains('Welcome to TestApp').should('be.visible');
  });

  it('works again', () => {
    cy.contains('Welcome to TestApp').should('be.visible');
  });
});
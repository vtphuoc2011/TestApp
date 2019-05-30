/// <reference types="cypress" />

import { FirstPage } from "./resource";
import { listenerCount } from "cluster";
import { type } from "os";
import delay = require("cypress/types/lodash/delay");

export class InputEmail{
    email: string
    constructor(emailaddress: string){
        this.email = emailaddress
    }
    list(): void{
        cy.get(FirstPage.txtEmailAddress)
            .type(this.email)
    }
}

export class checkEmail{
    email: string
    constructor(emailaddress : string){
        this.email = emailaddress
    }
    list(): void{
        cy.get(FirstPage.txtEmailAddress)
            .should('have.value',this.email)
    }
}

export class inputEmailSlowly{
    email: string
    constructor(ea : string){
        this.email = ea
    }    
    list() : void{
        cy.get(FirstPage.txtEmailAddress)
        .clear()    
        .type(this.email, {delay:1000})
    }   

}
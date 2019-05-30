/// <reference types="cypress" />

// Required for JIT in NG-7
import 'core-js/es7/reflect';
import { InputEmail, checkEmail, inputEmailSlowly } from '../helpers/Methods'
import sample = require('cypress/types/lodash/sample');

/* eslint-env mocha */
/* global cy */
describe('Test App Chicken', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });
  
  var email: string = 'abc@abc.com'

  // it('Input email address', () => {
  //   cy.visit('/')
  //   cy.get('.home-list > :nth-child(3) > a').click()
  //   var Input_Email = new InputEmail(email)
  //   Input_Email.list()
  // })

  // it('Check email address', () => {
  //   var check_Email = new checkEmail(email)
  //   check_Email.list()
  // })

  // it('Input email slowly', () => {
  //   var Input_Email = new inputEmailSlowly(email)
  //   Input_Email.list()
  // })

  it('learn class', () => {
    class Animal {
      move(distance: number = 0) {
        console.log(`Animal moved ${distance} m`)
      }
    }
    class Dog extends Animal {
      bark() {
        console.log('Gau gau')
      }
    }
    let dog = new Dog()
    dog.bark()
    dog.move(10)
    dog.bark()
  })

  it('learn class 2', () => {
    class Animal {
      name: string
      constructor(theName: string) {
        this.name = theName
      }
      move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}`);
      }
    }

    class Snake extends Animal {
      constructor(name: string) {
        super(name)
      }
      move(distance: number = 0) {
        console.log('Slithering...')
        super.move(distance)
      }
    }

    class Horse extends Animal {
      constructor(name: string) {
        super(name)
      }
      move(distance: number = 45) {
        console.log('Galloping..')
        super.move(distance)
      }
    }

    const sam = new Snake('Sammy the Python')
    const tom: Animal = new Horse('Tommy the Pal')

    sam.move(1)
    tom.move(2)
  })

  it('learn class 2', () => {
    class Person {
      name: string
      constructor(personname: string) {
        this.name = personname
      }
    }
    class Employee extends Person {
      private department: string
      constructor(name1: string, department: string) {
        super(name1)
        this.department = department
      }
      public getE() {
        return `My name is ${this.name} and in ${this.department}`
      }
    }
    let horward = new Employee("Howard", "IT")
    console.log(horward.getE())
  })

  it('learn class 3', () => {
    class Person {
      Firstname: string
      Lastname: string
      constructor(FN: string, LN: string) {
        this.Firstname = FN
        this.Lastname = LN
      }
    }
    class Employee extends Person {
      department: string
      constructor(FN: string, LN: string, dept: string) {
        super(FN, LN)
        this.department = dept
      }
      public get(){
        return(`My name is ${this.Firstname} and last name is ${this.Lastname} in department ${this.department} `)
      }
    }

    let toi = new Employee('thao', 'lai', 'HVN')
    console.log(toi.get())
    console.log(toi.Firstname)
  })
});
export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    state: string;
    city: string;
    postalCode: number;
    subscribtion: boolean;
    terms: boolean;

    constructor() { }

    set setFirstName(firstName) {
        this.firstName = firstName;
    }
    set setLastName(lastName) {
        this.lastName = lastName
    }
    set setEmail(email) {
        this.email = email;
    }
    set setPassword(password) {
        this.password = password;
    }
    set setState(state) {
        this.state = state;
    }
    set setCity(city) {
        this.city = city;
    }
    set setPostalCode(postalCode) {
        this.postalCode = postalCode;
    }
    set setSubscription(subscribtion) {
        this.subscribtion = subscribtion;
    }
    set setTerms(terms) {
        this.terms = terms;
    }
}

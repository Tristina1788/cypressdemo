export class LoginPage{

    firstNameTextbox ='#firstname';
    midleNameTextbox = '#middlename';
    lastNameTextbox ='#lastname';
    emailAddressTextbox = '#email_address';
    passwordTextbox = '#password';
    confirmPasswordTextbox ='#confirmation';
    registerBtnType = '#form-validate';
    registerBtnText = '[title="Register"]';
    successRegTxt = 'Thank you for registering with Main Website Store.';

    inputFormRegister(fname:string, lname:string,midName:string,email:string,pass:string, cofirmpw:string){
        cy.get(this.firstNameTextbox).type(fname);
        cy.get(this.firstNameTextbox).type(fname);
        cy.get(this.midleNameTextbox).type(lname);
        cy.get(this.lastNameTextbox).type(midName);
        cy.get(this.emailAddressTextbox).type(email);
        cy.get( this.passwordTextbox).type(pass);
        cy.get(this.confirmPasswordTextbox).type(cofirmpw);
        cy.get(this.registerBtnType).find(this.registerBtnText).click();
    }

    verifyRegisterSuccessfull(){
        cy.contains(this.successRegTxt).should('be.visible')
    }

}
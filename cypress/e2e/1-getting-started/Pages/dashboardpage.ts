export class DashboardPage{

    accountLink = 'Account';
    registerLink = 'Register'

    navigateLink(url:string){
        cy.visit(url)
    }
    clickAccount(){
        cy.contains(this.accountLink).click();
    }

    clickRegister(){
        cy.contains(this.registerLink).click();
    }
    
} 
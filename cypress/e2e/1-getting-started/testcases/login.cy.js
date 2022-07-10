import { LoginPage } from "../Pages/loginpage";
import { DashboardPage } from "../Pages/dashboardpage";

const url = "http://live.techpanda.org/";
const ADMIN_USERNAME="user01";
const ADMIN_PASSWORD="guru99com";
let loginPage = new LoginPage();
let dbPage = new DashboardPage();
describe('login with correct username and password', () => {
it('login with correct username and password',()=>{
    dbPage.navigateLink(url);
    dbPage.clickAccount();
    dbPage.clickRegister();
    loginPage.inputFormRegister("Trang","Minh","Nguyen",getRandomInt(0,1000000)+"mtrang8@gmail.com","abc123","abc123")
    loginPage.verifyRegisterSuccessfull();
})
})
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
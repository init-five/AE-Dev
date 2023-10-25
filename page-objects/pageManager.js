import { BasePage } from "./basePage";
import { RegisterUser } from "./registerUser";
import { Login } from "./login";
import { Contactus } from "./contactus";
import { TestCasePage } from "./testCasePage";
export class PageManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(this.page);
        this.registerUser = new RegisterUser(this.page);
        this.userLogin = new Login(this.page);
        this.contactus = new Contactus(this.page);
        this.testcases = new TestCasePage(this.page);
    }

    navigateToHomePage = async () => {
        return this.basePage;
    };

    registerNewUser = async () => {
        return this.registerUser;
    };

    login = async () => {
        return this.userLogin;
    };

    contactUS = async () => {
        return this.contactus;
    };

    testcase = async () => {
        return this.testcases;
    };
}

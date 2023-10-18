import { BasePage } from "./basePage";
import { RegisterUser } from "./registerUser";

export class PageManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(this.page);
        this.registerUser = new RegisterUser(this.page);
    }

    navigateToHomePage = async () => {
        return this.basePage;
    };

    registerNewUser = async () => {
        return this.registerUser;
    };
}

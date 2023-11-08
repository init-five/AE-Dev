import { BasePage } from "./basePage";
import { RegisterUser } from "./registerUser";
import { Login } from "./login";
import { Contactus } from "./contactus";
import { TestCasePage } from "./testCasePage";
import { ProductsPage } from "./productsPage";
import { HomePage } from "./homePage";
import { Payment } from "./paymentPage";

export class PageManager {
	constructor(page) {
		this.page = page;
		this.basePage = new BasePage(this.page);
		this.registerUser = new RegisterUser(this.page);
		this.userLogin = new Login(this.page);
		this.contactus = new Contactus(this.page);
		this.testcases = new TestCasePage(this.page);
		this.productsPage = new ProductsPage(this.page);
		this.homePage = new HomePage(this.page);
		this.paymentManager = new Payment(this.page);
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

	products = async () => {
		return this.productsPage;
	};

	homepage = async () => {
		return this.homePage;
	};

	payment = async () => {
		return this.paymentManager;
	};
}

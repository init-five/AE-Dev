import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { loginInfo as login } from "../data/loginData";

test("visiting test cases page", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.testcase()).testcasespage();
});

test("verify all products page", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).productDetailsPage();
});

test("Verify Subscription in home page", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.homepage()).subscriptionInHomePage();
});

test("Verify subscription in cart page", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.homepage()).subscriptionInCartPage();
});

test("adding products to cart", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).addingProductsinCart();
});

test("verify product quauntity in cart", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).verifyProductQuantityinCart();
});

test("Place Order: Register while Checkout", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).addingProductsinCart();
	await (await pm.products()).proceedToCheckout();
	await await (await pm.products()).proceedToCheckOutLoginRegister();
	await (await pm.registerNewUser()).registerNewUser();
	await (await pm.products()).navigatingTocartandProceedingToCheckout();
	await (await pm.payment()).paymentbyCard();
	await (await pm.registerNewUser()).deleteNewUserAccount();
});

test("Place Order: Register before Checkout", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.registerNewUser()).registerNewUser();
	await (await pm.products()).addingProductsinCart();
	await (await pm.products()).proceedToCheckout();
	await (await pm.products()).navigatingTocartandProceedingToCheckout();
	await (await pm.payment()).paymentbyCard();
	await (await pm.registerNewUser()).deleteNewUserAccount();
});

test("Place Order: Login before Checkout", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (
		await pm.login()
	).loginWithValidCredentials(login.email, login.password);
	await (await pm.products()).addingProductsinCart();
	await (await pm.products()).navigatingTocartandProceedingToCheckout();
	await (await pm.payment()).paymentbyCard();
});

test("Remove Products From Cart", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).removeProductsfromCart();
});

test("view category products", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.homepage()).viewCategoryProducts();
});

test("View Brand Products", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.homepage()).viewBrandProducts();
});

test("Search Products and Verify Cart After Login", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.products()).searchProductsandVerifyCart();
	await (await pm.login()).loginWithCredentials(login.email, login.password);
	await (await pm.products()).searchProductsandVerifyCartAfterLoging();
});

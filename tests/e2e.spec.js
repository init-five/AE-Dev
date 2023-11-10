import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

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
	await (await pm.registerNewUser()).registerNewUser();
	await (await pm.products()).navigatingTocartandProceedingToCheckout();
	await (await pm.payment()).paymentbyCard();
});

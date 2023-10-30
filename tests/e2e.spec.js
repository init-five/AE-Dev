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
	await (await pm.homepage()).subscription();
});

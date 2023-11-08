import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { loginInfo as login } from "../data/loginData";

test("register user", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.registerNewUser()).registerNewUser();
	await (await pm.registerNewUser()).deleteNewUserAccount();
	//await page.pause();
});

test("register with already existing email", async ({ page }) => {
	const pm = new PageManager(page);
	await (await pm.navigateToHomePage()).visit();
	await (await pm.registerNewUser()).registerWithExistingUser(login.email);
});

import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { loginInfo as login } from "../data/loginData";

test("login with valid crednetials", async ({ page }) => {
    const pm = new PageManager(page);
    await (await pm.navigateToHomePage()).visit();
    await (
        await pm.login()
    ).loginWithValidCredentials(login.email, login.password);
});

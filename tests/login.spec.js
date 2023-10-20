import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { loginInfo as login } from "../data/loginData";

async function loginAndNavigate(page) {
    const pm = new PageManager(page);
    await (await pm.navigateToHomePage()).visit();
    return await pm.login();
}

test("login with valid credentials", async ({ page }) => {
    await (
        await loginAndNavigate(page)
    ).loginWithValidCredentials(login.email, login.password);
});

test("login with invalid credentials", async ({ page }) => {
    await (
        await loginAndNavigate(page)
    ).loginWithInvalidCredentials(login.incorrectEmail, login.password);
});

test("logout user", async ({ page }) => {
    await (
        await loginAndNavigate(page)
    ).logoutUser(login.email, login.password);
});

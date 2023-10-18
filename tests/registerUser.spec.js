import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test("register user", async ({ page }) => {
    const pm = new PageManager(page);
    await (await pm.navigateToHomePage()).visit();
    await (await pm.registerNewUser()).registerNewUser();
    //await page.pause();
});

import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test("Contact US", async ({ page }) => {
    const pm = new PageManager(page);
    await (await pm.navigateToHomePage()).visit();
    await (await pm.contactUS()).contactusFormFill();
});

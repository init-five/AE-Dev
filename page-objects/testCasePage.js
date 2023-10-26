import { expect } from "playwright/test";

export class TestCasePage {
    constructor(page) {
        this.page = page;
        this.testcaseButton = page.getByRole("link", {
            name: " Test Cases",
            exact: true,
        });
        this.testcaseText = page.locator("b");
    }

    testcasespage = async () => {
        await this.testcaseButton.waitFor();
        await this.testcaseButton.click();
        await this.page.waitForURL(/\/test_cases/);
        await expect(this.testcaseText).toHaveText("Test Cases");
    };
}

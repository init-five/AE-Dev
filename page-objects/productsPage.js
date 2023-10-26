import { expect } from "@playwright/test";

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsButton = page.getByRole("link", { name: " Products" });
        this.allProductsText = page.getByRole("heading", {
            name: "All Products",
        });
        this.viewFirstProduct = page.locator('[href="/product_details/1"]');
        // this.closeadButton = page
        //     .frameLocator('iframe[name="aswift_6"]')
        //     .getByLabel("Close ad");
    }

    productDetailsPage = async () => {
        await this.productsButton.click();
        // if (await this.closeadButton.isVisible()) {
        //     await this.closeadButton.click();
        // }
        await this.page.waitForURL(/\/products/), { timeout: 3000 };
        await expect(this.allProductsText).toHaveText("All Products");
        await this.viewFirstProduct.click();
        // if (await this.closeadButton.isVisible()) {
        //     await this.closeadButton.click();
        // }
        await this.page.waitForURL(/\/product_details\/1/), { timeout: 3000 };
    };
}

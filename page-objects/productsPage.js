import { expect } from "@playwright/test";

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsButton = page.getByRole("link", { name: " Products" });
        this.allProductsText = page.getByRole("heading", {
            name: "All Products",
        });
        this.viewFirstProduct = page.locator('[href="/product_details/1"]');
        this.productCard = page.locator('[class="productinfo text-center"]');
        this.productName = page.locator(
            "//div[@class='productinfo text-center']//p[contains(text(),'Blue Top')]"
        );
        this.searchBarInputField = page.locator('[id="search_product"]');
    }

    navigateToProducts = async () => {
        await this.productsButton.click();
        await this.page.waitForURL(/\/products/), { timeout: 3000 };
        await expect(this.allProductsText).toHaveText("All Products");
    };

    productDetailsPage = async () => {
        await this.navigateToProducts();
        await this.viewFirstProduct.click();
        await this.page.waitForURL(/\/product_details\/1/), { timeout: 3000 };
    };

    searchProduct = async () => {
        await this.navigateToProducts();
        const productnameText = await this.productName.innerText();
        console.warn(productnameText);
        await this.searchBarInputField.fill(productnameText);
        await expect(this.productName).toHaveText(productnameText);
    };
}

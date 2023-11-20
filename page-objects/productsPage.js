import { expect } from "@playwright/test";

export class ProductsPage {
	constructor(page) {
		this.page = page;
		this.cartButton = page.locator("//a[normalize-space()='Cart']");
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
		this.productCardHoverOver = page.locator(
			'[class="product-image-wrapper"]'
		);
		this.addToCartButton = page.locator(
			"div.overlay-content a.btn.btn-default.add-to-cart"
		);
		this.continueShoppingButton = page.getByRole("button", {
			name: "Continue Shopping",
		});
		this.viewCartButton = page.getByRole("link", { name: "View Cart" });
		this.viewProductButton = page.locator(
			'[class="nav nav-pills nav-justified"]'
		);
		this.addQuantityFied = page.locator('[id="quantity"]');
		this.addToCartButtoninProductDetail = page.locator(
			'[class="btn btn-default cart"]'
		);
		this.quantityofProductOrdered = page.locator('[class="cart_quantity"]');
		this.proceedToCheckoutButton = page.locator(
			'[class="btn btn-default check_out"]'
		);
		this.loginandRegisterButton = page.getByRole("link", {
			name: "Register / Login",
		});
		this.placeOrderButton = page.getByText("Place Order");
		this.deleteProductButton = page.locator(
			'[class="cart_quantity_delete"]'
		);
		//this.emptyCartButton = page.locator("//p[contains(text(),'Click')]");
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

	addingProductsinCart = async () => {
		await this.navigateToProducts();
		await this.productCardHoverOver.nth(0).waitFor();
		await this.productCardHoverOver.nth(0).hover();
		await this.addToCartButton.nth(0).click();
		await this.continueShoppingButton.click();
		await this.productCardHoverOver.nth(1).waitFor();
		await this.productCardHoverOver.nth(1).hover();
		await this.addToCartButton.nth(1).click();
		await this.viewCartButton.click();
		await this.page.waitForURL(/\/view_cart/), { timeout: 3000 };
	};

	verifyProductQuantityinCart = async () => {
		await this.navigateToProducts();
		await this.viewProductButton.nth(0).waitFor();
		await this.viewFirstProduct.nth(0).click();
		await this.page.waitForURL(/\/product_details\/1/), { timeout: 3000 };
		await this.addQuantityFied.clear();
		await this.addQuantityFied.fill("4");
		await this.addToCartButtoninProductDetail.click();
		await this.viewCartButton.click();
		await this.page.waitForURL(/\/view_cart/), { timeout: 3000 };
		//const quantityordered = this.quantityofProductOrdered.innerText();
		//console.warn(quantityordered);
		await expect(this.quantityofProductOrdered).toHaveText("4");
	};

	proceedToCheckout = async () => {
		await this.proceedToCheckoutButton.waitFor();
		await this.proceedToCheckoutButton.click();
	};

	proceedToCheckOutLoginRegister = async () => {
		await this.loginandRegisterButton.click();
		await this.page.waitForURL(/\/login/), { timeout: 3000 };
	};

	navigatingTocartandProceedingToCheckout = async () => {
		//await this.cartButton.waitFor();
		//await this.cartButton.click();
		await this.page.goto("https://automationexercise.com/view_cart");
		await this.proceedToCheckoutButton.waitFor();
		await this.proceedToCheckoutButton.click();
		await this.page.waitForURL(/\/checkout/), { timeout: 3000 };
		await this.placeOrderButton.click();
	};

	removeProductsfromCart = async () => {
		await this.navigateToProducts();
		await this.productCardHoverOver.nth(0).waitFor();
		await this.productCardHoverOver.nth(0).hover();
		await this.addToCartButton.nth(0).click();
		await this.viewCartButton.click();
		await this.page.waitForURL(/\/view_cart/), { timeout: 3000 };
		await this.deleteProductButton.click();
	};
}

import { faker } from "@faker-js/faker";
import { expect } from "playwright/test";

const email = faker.internet.email();

export class HomePage {
	constructor(page) {
		this.page = page;
		this.subscriptionText = page.getByRole("heading", {
			name: "Subscription",
		});
		this.emailInputField = page.getByPlaceholder("Your email address");
		this.subscriptionButton = page.locator('[id="subscribe"]');
		this.sucessfulSusbscriptionText = page.getByText(
			"You have been successfully subscribed!"
		);
		this.cartButton = page.getByRole("link", { name: " Cart" });
		this.womenCategoryOpenButton = page.locator('[href="#Women"]');
		this.dressButton = page.locator('[href="/category_products/1"]');
		this.poloBrandButton = page.locator('[href="/brand_products/Polo"]');
		this.bibaBrandButton = page.locator('[href="/brand_products/Biba"]');
	}

	subscription = async () => {
		await expect(this.subscriptionText).toHaveText("Subscription");
		await this.emailInputField.fill(email);
		await this.subscriptionButton.click();
		await expect(this.sucessfulSusbscriptionText).toHaveText(
			"You have been successfully subscribed!"
		);
	};

	subscriptionInHomePage = async () => {
		await this.subscriptionText.waitFor();
		await this.subscription();
	};

	subscriptionInCartPage = async () => {
		await this.cartButton.waitFor();
		await this.cartButton.click();
		await this.page.waitForURL(/\/view_cart/);
		await this.subscription();
	};

	viewCategoryProducts = async () => {
		await this.womenCategoryOpenButton.waitFor();
		await this.womenCategoryOpenButton.click();
		await this.dressButton.click();
		await this.page.waitForURL(/\/category_products\/1/), { timeout: 3000 };
	};

	viewBrandProducts = async () => {
		await this.poloBrandButton.waitFor();
		await this.poloBrandButton.click();
		await this.page.waitForURL(/\/brand_products\/Polo/), { timeout: 3000 };
		await this.page.goBack();
		await this.bibaBrandButton.waitFor();
		await this.bibaBrandButton.click();
		await this.page.waitForURL(/\/brand_products\/Biba/), { timeout: 3000 };
	};
}

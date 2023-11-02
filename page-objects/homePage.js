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
}

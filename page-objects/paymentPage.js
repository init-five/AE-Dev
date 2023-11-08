export class Payment {
	constructor(page) {
		this.page = page;
		this.nameonCardField = page.locator('[data-qa="name-on-card"]');
		this.numberonCardField = page.locator('[data-qa="card-number"]');
		this.cvc = page.locator('[data-qa="cvc"]');
		this.expiration = page.locator('[data-qa="expiry-month"]');
		this.year = page.locator('[data-qa="expiry-year"]');
		this.payandconfirm = page.locator('[data-qa="pay-button"]');
	}

	paymentbyCard = async () => {
		await this.page.waitForURL(/\/payment/), { timeout: 3000 };
		await this.nameonCardField.fill("jack");
		await this.numberonCardField.fill("424242424242");
		await this.cvc.fill("457");
		await this.expiration.fill("12/27");
		await this.year.fill("2028");
		await this.payandconfirm.click();
		await this.page.waitForURL(/\/payment_done/), { timeout: 3000 };
	};
}

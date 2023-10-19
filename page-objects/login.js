import { expect } from "@playwright/test";

export class Login {
    constructor(page) {
        this.page = page;
        this.userLoginButton = page.getByRole("link", {
            name: " Signup / Login",
        });
        this.loginToYourAccountText = page.getByText("Login to your account");
        this.emailInputField = page.locator('[data-qa="login-email"]');
        this.passwordInputField = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.logoutButton = page.locator('[href="/logout"]');
    }

    loginWithValidCredentials = async (userEmail, userPassword) => {
        await this.userLoginButton.waitFor();
        await this.userLoginButton.click();
        const loginPageText = await this.loginToYourAccountText.innerText();
        console.warn(loginPageText);
        await expect(this.loginToYourAccountText).toHaveText(loginPageText);
        await this.emailInputField.fill(userEmail);
        await this.passwordInputField.fill(userPassword);
        await this.loginButton.click();
        await expect(this.logoutButton).toBeVisible();
    };
}

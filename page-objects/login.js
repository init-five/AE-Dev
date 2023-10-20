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
        this.errorMessageText = page.locator(
            "//p[normalize-space()='Your email or password is incorrect!']"
        );
    }

    navigateToLoginPage = async () => {
        await this.userLoginButton.waitFor();
        await this.userLoginButton.click();
        const loginPageText = await this.loginToYourAccountText.innerText();
        await expect(this.loginToYourAccountText).toHaveText(loginPageText);
    };

    loginWithCredentials = async (userEmail, userPassword) => {
        await this.emailInputField.fill(userEmail);
        await this.passwordInputField.fill(userPassword);
        await this.loginButton.click();
    };

    loginWithValidCredentials = async (userEmail, userPassword) => {
        await this.navigateToLoginPage();
        await this.loginWithCredentials(userEmail, userPassword);
        await expect(this.logoutButton).toBeVisible();
    };

    loginWithInvalidCredentials = async (userEmail, userPassword) => {
        await this.navigateToLoginPage();
        await this.loginWithCredentials(userEmail, userPassword);
        const errorMessage = await this.errorMessageText.innerText();
        await expect(this.errorMessageText).toHaveText(errorMessage);
    };

    logoutUser = async (userEmail, userPassword) => {
        await this.loginWithValidCredentials(userEmail, userPassword);
        await this.logoutButton.click();
        await this.navigateToLoginPage();
        await expect(this.logoutButton).not.toBeVisible();
    };
}

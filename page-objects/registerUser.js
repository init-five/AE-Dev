import { expect } from "playwright/test";
import { fa, faker } from "@faker-js/faker";

const name = faker.person.firstName();
const email = `${name}cd@yopmail.com`;
const password = faker.internet.password({ length: 8 });
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.person.bio();
const state = faker.person.jobTitle();
const city = faker.person.jobType();
//const zipcode = faker.internet.ip();

export class RegisterUser {
    constructor(page) {
        this.page = page;
        this.signupButton = page.getByRole("link", {
            name: " Signup / Login",
        });
        this.newusersignupText = page.getByRole("heading", {
            name: "New User Signup!",
        });
        this.nameInputField = page.getByPlaceholder("Name");
        this.emailInputField = page
            .locator("form")
            .filter({ hasText: "Signup" })
            .getByPlaceholder("Email Address");
        this.registerButton = page.getByRole("button", { name: "Signup" });
        this.enteraccountinformationText = page.getByText(
            "Enter Account Information"
        );
        this.titleCheckbox = page.locator("#uniform-id_gender1");
        this.passwordInputField = page.locator('[data-qa="password"]');
        this.daysDropdown = page.locator('[data-qa="days"]');
        this.monthDropdown = page.locator('[data-qa="months"]');
        this.yearDropdown = page.locator('[data-qa="years"]');
        this.firstNameInputField = page.locator('[data-qa="first_name"]');
        this.lastnameInputField = page.locator('[data-qa="last_name"]');
        this.addressInputField = page.locator('[data-qa="address"]');
        this.countryDropdown = page.locator('[data-qa="country"]');
        this.stateInputField = page.locator('[data-qa="state"]');
        this.cityInputField = page.locator('[data-qa="city"]');
        this.zipcodeInputField = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInputField = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
        this.accountCreatedText = page.getByText("Account Created!");
        this.continueButton = page.getByRole("link", { name: "Continue" });
        this.loggedinasusername = page.getByText(`Logged in as ${firstName}`);
        this.deleteAccountButton = page.getByRole("link", {
            name: " Delete Account",
        });
        this.accountDeletedText = page.getByText("Account Deleted!");
    }

    registerNewUser = async () => {
        await this.signupButton.waitFor();
        await this.signupButton.click();
        await expect(this.newusersignupText).toHaveText("New User Signup!");
        await this.nameInputField.waitFor();
        await this.nameInputField.type(name);
        await this.emailInputField.type(email);
        await this.registerButton.click();
        await expect(this.enteraccountinformationText).toHaveText(
            "Enter Account Information"
        );
        await this.titleCheckbox.click();
        await this.passwordInputField.fill(password);
        await this.daysDropdown.selectOption("14");
        await this.monthDropdown.selectOption("10");
        await this.yearDropdown.selectOption("1994");
        await this.firstNameInputField.fill(firstName);
        await this.lastnameInputField.fill(lastName);
        await this.addressInputField.fill(address);
        await this.countryDropdown.selectOption("New Zealand");
        await this.stateInputField.fill(state);
        await this.cityInputField.fill(city);
        await this.zipcodeInputField.fill("5400");
        await this.mobileNumberInputField.fill("1234567890");
        await this.createAccountButton.click();
        await expect(this.accountCreatedText).toHaveText("Account Created!");
        await this.continueButton.click();
        // await expect(this.loggedinasusername).toHaveText(
        //     `logged in as ${firstName}`
        // );
        await this.deleteAccountButton.click();
        await expect(this.accountDeletedText).toHaveText("Account Deleted!");
    };
}

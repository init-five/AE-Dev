import { faker } from "@faker-js/faker";
import { expect } from "playwright/test";

const name = faker.internet.userName();
const email = faker.internet.email();
const subject = faker.internet.displayName();
const message = faker.internet.password({ length: 20, prefix: "Hello" });

export class Contactus {
    constructor(page) {
        this.page = page;
        this.contactusButton = page.locator('[href="/contact_us"]');
        this.getinTouchText = page.getByText("Get In Touch");
        this.nameInputField = page.locator('[data-qa="name"]');
        this.emailInputField = page.locator('[data-qa="email"]');
        this.subjectInputField = page.locator('[data-qa="subject"]');
        this.messageInputField = page.locator('[data-qa="message"]');
        this.chooseFileButton = page.locator('[name="upload_file"]');
        this.submitButton = page.locator('[data-qa="submit-button"]');
        this.successMessageText = page
            .locator("#contact-page")
            .getByText(
                "Success! Your details have been submitted successfully."
            );
    }

    contactusFormFill = async () => {
        await this.contactusButton.waitFor();
        await this.contactusButton.click();
        await this.page.waitForURL("/contact_us");
        await expect(this.getinTouchText).toHaveText("Get In Touch");
        await this.nameInputField.fill(name);
        await this.emailInputField.fill(email);
        await this.subjectInputField.fill(subject);
        await this.messageInputField.fill(message);
        await this.chooseFileButton.setInputFiles("./upload/image.png");
        // handling alert box
        this.page.on("dialog", (dialog) => {
            console.warn(dialog.message());
            dialog.accept();
        });
        await this.submitButton.click();
        await expect(this.successMessageText).toHaveText(
            "Success! Your details have been submitted successfully."
        );
    };
}

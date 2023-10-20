import { faker } from "@faker-js/faker";

const fakeEmail = faker.internet.email();

export const loginInfo = {
    email: "jackcd@yopmail.com",
    password: "Sherl0ck@five",
    incorrectEmail: fakeEmail,
};

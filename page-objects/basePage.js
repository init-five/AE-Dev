export class BasePage {
    constructor(page) {
        this.page = page;
    }

    visit = async () => {
        // closing ads
        await this.page.route("**/*", (request) => {
            return request
                .request()
                .url()
                .startsWith("https://googleads.g.doubleclick.net/")
                ? request.abort()
                : request.continue();
        });
        await this.page.goto("/");
    };
}

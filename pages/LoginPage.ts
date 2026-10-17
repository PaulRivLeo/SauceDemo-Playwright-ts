import {Page,Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    private usernameInput: Locator;
    private passwordInput : Locator;
    private loginBtn : Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]')
    }

    async goto(): Promise<void>{
        await this.page.goto('/');
    }

    async Login(user:string, password:string): Promise<void>{
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}


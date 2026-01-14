const { expect } = require('@playwright/test');
exports.LoginPage=
class LoginPage{
    constructor(page,url){
        this.page=page;
        this.url=url;
        this.loginlink="#login2";
        this.usernamelo="#loginusername";
        this.password="#loginpassword";
        this.loginbut={name:/Log in/i};
        this.assertname="#nameofuser";
        this.catloc="#itemc";


    }
    async gotologin(){
            await this.page.goto(this.url);
            await expect(this.page).toHaveURL(this.url);
            console.log("Title:"+await this.page.title());

    }
    async login(username,password){
            
            await this.page.locator(this.loginlink).click();
            await this.page.locator(this.usernamelo).fill(username);
            await this.page.locator(this.password).fill(password);
            await this.page.getByRole('button',  this.loginbut).click();
            await expect(this.page.locator(this.assertname)).toHaveText("Welcome "+username);
            const categories=await this.page.locator(this.catloc).allTextContents();
            console.log("Menu:"+categories);
    }
}
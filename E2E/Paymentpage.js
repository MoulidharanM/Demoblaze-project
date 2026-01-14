const { expect } = require('@playwright/test');

exports.Paymentpage=class Paymentpage{
    constructor(page){
        this.page=page;
        this.name="#name";
        this.country="#country";
        this.city="#city";
        this.card="#card";
        this.month="#month";
        this.year="#year";
        this.purchase={name:"Purchase"};
        this.cnfrmmsg={ name: 'Thank you for your purchase!' };
        this.receipt='p.lead.text-muted';
        this.receiptacceptbut=".sa-confirm-button-container";
    }
    async payment(name,country,city,card,month,year){
       
       await this.page.locator(this.name).fill(name);
       await this.page.locator(this.country).fill(country);
       await this.page.locator(this.city).fill(city);
       await this.page.locator(this.card).fill(card);
       await this.page.locator(this.month).fill(month);
       await this.page.locator(this.year).fill(year);
       await this.page.getByRole('button',this.purchase).click();
       const purchaseconfirmation=this.page.getByRole('heading', this.cnfrmmsg);
       await expect(purchaseconfirmation).toBeVisible();
       const purchasereceipt=await this.page.locator(this.receipt).textContent();
       console.log(purchasereceipt);
       await this.page.locator(this.receiptacceptbut).click();
    }
}
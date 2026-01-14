const{expect}=require('@playwright/test')
exports.Cartpage=class Cartpage{
    constructor(page){
        this.page=page;
        this.cart="Cart";
        this.product="tr[class='success']";
        this.cartitem="#tbodyid";
        this.actprodtname="td:nth-child(2)";
        this.delete="td:nth-child(4) a";
        this.amount="#totalp";
        this.orderbut={name: "Place Order"};

    }
    async cartcleaning(){

    await this.page.getByText(this.cart).first().click();
    await this.page.reload();
    const cartlist=this.page.locator(this.cartitem);
    await expect(cartlist).toBeVisible();
    while (true) {
    const cartproduct= this.page.locator(this.product);    
    const cartproductcount=await cartproduct.count();
    if (cartproductcount<=1) break;
    if(cartproductcount>1){
        for(let i=0;i<cartproductcount-1;i++){
            const actualproduct=await cartproduct.nth(i).locator(this.actprodtname).textContent();
            if(actualproduct==productName){
                continue;
            }
            else{
                await cartproduct.nth(i).locator(this.delete).click({slowMo:1000});
                await expect(cartlist).toBeVisible();
                break;
            }
            
        }
    }
   }
   
   const total=await this.page.locator(this.amount).textContent();
   console.log("Cart Value:"+total);
   await expect(this.page.getByRole('button',this.orderbut )).toBeVisible();
   await this.page.getByRole('button',this.orderbut ).click();

}
}
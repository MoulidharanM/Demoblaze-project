
exports.Product=class Product{
    constructor(page){
        this.page=page;
        this.prodcategory={name:/laptop/i};
        this.prod=".card-title a";
        this.addcartbut={name:"Add to cart"};
    }
    async selectproduct(productName){

    await this.page.getByRole('link',this.prodcategory).click();
    await this.page.locator(this.prod, { hasText: productName }).click();
    this.page.once('dialog',async dialog =>dialog.accept());
    await this.page.getByRole('link',this.addcartbut).click(); 
    }
}
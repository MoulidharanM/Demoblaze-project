const{test,expect}=require('@playwright/test')
const {LoginPage}=require('/playwright/E2E/Loginpage')
const {Product}=require('/playwright/E2E/Product');
const { Paymentpage } = require('../E2E/Paymentpage');
const { Cartpage } = require('../E2E/Cartpage');
const testData = require('../data/testData.json');

const productName=testData.productName;
const url=testData.url;
const usermail=testData.usermail;
const password=testData.password;
const name=testData.customer.name;
const country=testData.customer.country;
const city=testData.customer.country;
const card=testData.customer.card;
const month=testData.customer.month;
const year=testData.customer.year;

test('Login',async({page})=>{
    
    //loginpage
    const loginobj=new LoginPage(page,url);
    await loginobj.gotologin();
    await loginobj.login(usermail,password);

    //productpage
    const productpage=new Product(page);
    await productpage.selectproduct(productName);

    //cartpage
    const cartpage=new Cartpage(page);
    await cartpage.cartcleaning();

   //payment
   const paymentpage=new Paymentpage(page);
   await paymentpage.payment(name,country,city,card,month,year);
   



})




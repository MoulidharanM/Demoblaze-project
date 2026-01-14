const{test,expect}=require('@playwright/test')
const { LoginPage } = require('../E2E/Loginpage');
const {Product}=require('../E2E/Product');
const { Paymentpage } = require('../E2E/Paymentpage');
const { Cartpage } = require('../E2E/Cartpage');
const testData = require('../data/testData.json');
import dotenv from "dotenv";
dotenv.config({path:"./data/.env"});


const url = process.env.url?.trim();
const usermail = process.env.MY_USER_EMAIL;
const password = process.env.password?.trim();
const productName=testData.productName;
const name=testData.customer.name;
const country=testData.customer.country;
const city=testData.customer.city;
const card=testData.customer.card;
const month=testData.customer.month;
const year=testData.customer.year;

test('Login',async({page})=>{
    console.log("DEBUG: Username from env is ->", usermail);
    
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




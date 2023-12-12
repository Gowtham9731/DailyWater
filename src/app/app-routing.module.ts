import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
// import { GeneralComponent } from './user/register/general/general.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HeaderComponent } from './MainPage/header/header.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { OfferzoneComponent } from './Productpage/offerzone/offerzone.component';
import { ShoppingComponent } from './Productpage/shopping/shopping.component';
import { AddToCartComponent } from './Productpage/add-to-cart/add-to-cart.component';
import { PaymentComponent } from './Payment/payment/payment.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { GeneralMemberComponent } from './user/register/general-member/general-member.component';
import { PremiumMemberComponent } from './user/register/premium-member/premium-member.component';
import { OrdersComponent } from './Admin/orders/orders.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'offerzone',component:OfferzoneComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'addtocart',component:AddToCartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'generalmember',component:GeneralMemberComponent},
  {path:'premiummember',component:PremiumMemberComponent},
  {path:'orders',component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

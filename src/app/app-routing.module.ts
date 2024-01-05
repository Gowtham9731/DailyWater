import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
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
import { ContactusComponent } from './user/contactus/contactus.component';
import { TransportsComponent } from './Admin/transports/transports.component';
import { StackentryComponent } from './Admin/stackentry/stackentry.component';
import { StaffentryComponent } from './Admin/Staff/staffentry/staffentry.component';
import { AdminheaderComponent } from './MainPage/adminheader/adminheader.component';
import { StaffAttendenceComponent } from './Admin/Staff/staff-attendence/staff-attendence.component';
import { AccountsComponent } from './Admin/accounts/accounts.component';
import { EnquiresComponent } from './Admin/enquires/enquires.component';
import { DeliveryserviceComponent } from './user/deliveryservice/deliveryservice.component';
import { ProductsEntryComponent } from './Admin/Stocks/products-entry/products-entry.component';
import { ProductsRegComponent } from './Admin/Stocks/products-reg/products-reg.component';
import { DailyOrdersComponent } from './Admin/orders/daily-orders/daily-orders.component';
import { TrackingComponent } from './Payment/tracking/tracking.component';
import { StatementsComponent } from './Admin/statements/statements.component';

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
  {path:'contactus',component:ContactusComponent},
  {path:'transports',component:TransportsComponent},
  {path:'premiummember',component:PremiumMemberComponent},
  {path:'generalmember',component:GeneralMemberComponent},
  {path:'stackentry',component:StackentryComponent},
  {path:'staffentry',component:StaffentryComponent},
  {path:'adminheader',component:AdminheaderComponent},
  {path:'staffattendence',component:StaffAttendenceComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'enquires',component:EnquiresComponent},
  {path:'services',component:DeliveryserviceComponent},
  {path:'productentry',component:ProductsEntryComponent},
  {path:'productreg',component:ProductsRegComponent},
  {path:'dailyorders',component:DailyOrdersComponent},
  {path:'tracking',component:TrackingComponent},
  {path:'statements',component:StatementsComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

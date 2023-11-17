import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
// import { SignInComponent } from './User/sign-in/sign-in.component';
// import { LoginComponent } from './User/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ProductsComponent } from './app/products/products.component';
// import { AdminComponent } from './app/admin/admin.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { RegisterComponent } from './user/register/register.component';
// import { GeneralComponent } from './user/Register/general/general.component';
// import { PremiumComponent } from './user/Register/premium/premium.component';
import { OfferzoneComponent } from './products/offerzone/offerzone.component';
import { ShoppingComponent } from './products/shopping/shopping.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './user/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // SignInComponent,
    // LoginComponent,
    // ProductsComponent,
    // AdminComponent,
    // AboutusComponent,
    // ContactusComponent,
    // RegisterComponent,
    // GeneralComponent,
    // PremiumComponent,
    OfferzoneComponent,
    ShoppingComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './user/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './MainPage/header/header.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { WelcomeComponent } from './MainPage/welcome/welcome.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { StockentryComponent } from './Admin/stockentry/stockentry.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { TransportsComponent } from './Admin/transports/transports.component';
import { VendorsComponent } from './Admin/vendors/vendors.component';
import { EnquiresComponent } from './Admin/enquires/enquires.component';
import { AccountsComponent } from './Admin/accounts/accounts.component';
import { OfferzoneComponent } from './Productpage/offerzone/offerzone.component';
import { ShoppingComponent } from './Productpage/shopping/shopping.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OfferzoneComponent,
    ShoppingComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AdminhomeComponent,
    StockentryComponent,
    OrdersComponent,
    TransportsComponent,
    VendorsComponent,
    EnquiresComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,BrowserAnimationsModule,
    HttpClientModule,FormsModule
    // MatSidenavModule,
    // MatButtonModule,MatIconModule,MatToolbarModule,MatListModule,MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

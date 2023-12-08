import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

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
import { AddToCartComponent } from './Productpage/add-to-cart/add-to-cart.component';
import { PaymentComponent } from './Payment/payment/payment.component';
import { TrackingComponent } from './Payment/tracking/tracking.component';



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
    AccountsComponent,
    AddToCartComponent,
    PaymentComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,BrowserAnimationsModule,
    HttpClientModule,FormsModule,
    MatCardModule,MatButtonModule,
    MatDialogModule,MatSelectModule,MatTooltipModule,
    MatIconModule,MatInputModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

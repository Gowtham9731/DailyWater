import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';


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
// import { OrdersComponent } from './Admin/orders/orders.component';
import { TransportsComponent } from './Admin/transports/transports.component';
import { EnquiresComponent } from './Admin/enquires/enquires.component';
import { AccountsComponent } from './Admin/accounts/accounts.component';
import { OfferzoneComponent } from './Productpage/offerzone/offerzone.component';
import { ShoppingComponent } from './Productpage/shopping/shopping.component';
import { AddToCartComponent } from './Productpage/add-to-cart/add-to-cart.component';
import { PaymentComponent } from './Payment/payment/payment.component';
import { TrackingComponent } from './Payment/tracking/tracking.component';
import { PremiumMemberComponent } from './user/register/premium-member/premium-member.component';
import { GeneralMemberComponent } from './user/register/general-member/general-member.component';
import { StackentryComponent } from './Admin/stackentry/stackentry.component';
import { StaffentryComponent } from './Admin/Staff/staffentry/staffentry.component';
import { AdminheaderComponent } from './MainPage/adminheader/adminheader.component';
import { StaffAttendenceComponent } from './Admin/Staff/staff-attendence/staff-attendence.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { DeliveryserviceComponent } from './user/deliveryservice/deliveryservice.component';
import { ProductsEntryComponent } from './Admin/Stocks/products-entry/products-entry.component';
import { ProductsRegComponent } from './Admin/Stocks/products-reg/products-reg.component';
import { DailyOrdersComponent } from './Admin/orders/daily-orders/daily-orders.component';
import { BulkOrdersComponent } from './Admin/orders/bulk-orders/bulk-orders.component';
import { StatementsComponent } from './Admin/statements/statements.component';
// import { ApiService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';





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
    // OrdersComponent,
    TransportsComponent,
    EnquiresComponent,
    AccountsComponent,
    AddToCartComponent,
    PaymentComponent,
    TrackingComponent,
    PremiumMemberComponent,
    GeneralMemberComponent,
    StackentryComponent,
    StaffentryComponent,
    AdminheaderComponent,
    StaffAttendenceComponent,
    ContactusComponent,
    DeliveryserviceComponent,
    ProductsEntryComponent,
    ProductsRegComponent,
    DailyOrdersComponent,
    BulkOrdersComponent,
    StatementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    NgbModule,BrowserAnimationsModule,
    HttpClientModule,FormsModule,
    MatCardModule,MatButtonModule,
    MatDialogModule,MatSelectModule,MatTooltipModule,
    MatIconModule,MatInputModule,MatRadioModule,
    MatExpansionModule,MatRippleModule,MatMenuModule,
    MatCheckboxModule,MatPaginatorModule,MatDatepickerModule,
    MatNativeDateModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

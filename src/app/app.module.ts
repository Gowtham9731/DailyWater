import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferzoneComponent } from './products/offerzone/offerzone.component';
import { ShoppingComponent } from './products/shopping/shopping.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './user/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
   
    
    UserComponent,
    // SignInComponent,
    LoginComponent,
    // ProductsComponent,
    // AdminComponent,
    // AboutusComponent,
    // ContactusComponent,
    RegisterComponent,
    // GeneralComponent,
    // PremiumComponent,
    OfferzoneComponent,
    ShoppingComponent,
    PaymentComponent,
    HomeComponent,
    ProfileComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './screens/unauth/components/auth-form/auth-form.component';
import { LoginFormComponent } from './screens/unauth/screens/login/components/login-form/login-form.component';
import { SignupFormComponent } from './screens/unauth/screens/signup/components/signup-form/signup-form.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HomeComponent } from './screens/auth/home/screens/book-list/components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { UnauthComponent } from './screens/unauth/components/unauth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    TextInputComponent,
    HomeComponent,
    NavbarComponent,
    UnauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

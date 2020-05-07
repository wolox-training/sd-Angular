import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './screens/unauth/components/auth-form/auth-form.component';
import { LoginFormComponent } from './screens/unauth/screens/login/components/login-form/login-form.component';
import { SignupFormComponent } from './screens/unauth/screens/signup/components/signup-form/signup-form.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HomeComponent } from './screens/auth/home/screens/book-list/components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    TextInputComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

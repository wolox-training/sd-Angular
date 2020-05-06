import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './screens/auth/screens/login/components/login-form/login-form.component';
import { SignupFormComponent } from './screens/auth/screens/signup/components/signup-form/signup-form.component';
import { HomeComponent } from './screens/home/screens/book-list/components/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

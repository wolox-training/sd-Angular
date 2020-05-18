import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './screens/unauth/screens/login/components/login-form/login-form.component';
import { SignupFormComponent } from './screens/unauth/screens/signup/components/signup-form/signup-form.component';
import { HomeComponent } from './screens/auth/home/screens/book-list/components/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'unauth',
    children: [
      {
        path: 'signup',
        component: SignupFormComponent
      },
      { 
        path: 'login',
        component: LoginFormComponent
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      { 
        path: 'home', 
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

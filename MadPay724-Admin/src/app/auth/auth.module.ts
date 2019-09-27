import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {AuthComponent } from './auth.component';
import { authRoutes } from './routes/routes.routing';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

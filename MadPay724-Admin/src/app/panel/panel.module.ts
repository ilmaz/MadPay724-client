import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './routes/routes.routing';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(panelRoutes)
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }

import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { PropertCardComponent } from './property/propert-card/propert-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import {Routes, RouterModule} from '@angular/router';
import { PropertyRead } from '@angular/compiler';

const appRoutes: Routes = [
  {path:'',component:PropertListComponent},
  {path:'rent',component:PropertListComponent},
  {path: 'add-property', component:AddPropertyComponent},
  {path: 'property-detail/:id', component:PropertyDetailComponent},
  {path: '**', component:PropertListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertListComponent,
    PropertCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

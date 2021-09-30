import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTACION DE LOGIN VIAJERO
import {RegisterTravelerComponent}from '../app/Travelers_/pages/register-traveler/register-traveler.component'
import { LoginComponent } from './public/login/login.component';
import { TripEventsComponent } from 'BETRIP_ANGULAR_PROYECT/src/app/Travelers_/pages/trip-events/trip-events.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'travelerRegister',component:RegisterTravelerComponent},
  {path:'tripEvent',component:TripEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

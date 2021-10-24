import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTACION DE LOGIN VIAJERO
import {RegisterTravelerComponent}from '../app/Travelers_/pages/register-traveler/register-traveler.component'
import { LoginComponent } from './public/login/login.component';
import { TripEventsComponent } from '../app/Travelers_/pages/trip-events/trip-events.component';
import { KnowMoreComponent } from './Travelers_/pages/know-more/know-more.component';
import { RoutesComponent } from './Travelers_/pages/routes/routes.component';
import { SearchEventComponent } from './Travelers_/pages/search-event/search-event.component';
import { SearchRouteComponent } from './Travelers_/pages/search-route/search-route.component';
import { CreateEventComponent } from './Travelers_/pages/create-event/create-event.component';
import { CreateRouteComponent } from './Drivers/pages/create-route/create-route.component';
import { TripRoutesComponent } from './Drivers/pages/trip-routes/trip-routes.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'travelerRegister',component:RegisterTravelerComponent},
  {path:'tripEvent',component:TripEventsComponent},
  {path:'routes',component:RoutesComponent},
  {path:'knowMore',component:KnowMoreComponent},
  {path:'searchEvent',component:SearchEventComponent},
  {path:'search-Routes',component:SearchRouteComponent},
  {path:'create-Event',component:CreateEventComponent},
  {path:'create-route', component:CreateRouteComponent},
  {path:'tripRoutes', component:TripRoutesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//IMPORTACION DE VIAJERO
import {TravelersComponent}from './Travelers_/pages/travelers/travelers.component'
const routes: Routes = [
  {path:'travelers',component:TravelersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

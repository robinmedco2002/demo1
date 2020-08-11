import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtnfunComponent} from './share/btnfun/btnfun.component';
import { SimpleformComponent } from './share/simpleform/simpleform.component';
import {  TdfComponent} from './share/tdf/tdf.component'
import { UserchildComponent } from './share/userchild/userchild.component';
import { UserchildtoparentComponent } from './share/userchildtoparent/userchildtoparent.component';
import { DataapiComponent } from './share/dataapi/dataapi.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { HomeComponent } from './share/home/home.component';
import { AboutComponent } from './share/about/about.component'

const routes: Routes = [

  { path:'', component:HomeComponent },
  { path: 'about', component:AboutComponent},
  { path:'btnfun', component:BtnfunComponent },
  { path:'simpleform', component:SimpleformComponent },
  { path:'tdf', component:TdfComponent },
  { path:'userchild', component:UserchildComponent },
  { path:'userchildtoparent',  component:UserchildtoparentComponent },
  { path:'dataapi', component:DataapiComponent},
  { path:'**', component:PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

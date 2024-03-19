import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePosteComponent} from "./pages/single-poste/single-poste.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'category' ,component:SingleCategoryComponent },
  {path:'post' , component:SinglePosteComponent},
  {path:'about', component:AboutUsComponent},
  {path:'term-condition',component:TermsAndConditionsComponent},
  {path:'contact' , component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

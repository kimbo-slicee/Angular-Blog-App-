import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from "./dashbord/dashbord.component";
import {CategoriesComponent} from "./categories/categories.component";
import {AllPostesComponent} from "./posts/all-postes/all-postes.component";
import {NewPostComponent} from "./posts/new-post/new-post.component";

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'posts',component:AllPostesComponent},
  {path:'post/new' ,component:NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

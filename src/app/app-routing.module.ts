import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { LoginComponent } from './conponents/login/login.component';
import { HomeComponent } from './conponents/home/home.component';
import { ListCategoriesComponent } from './conponents/list-categories/list-categories.component';
import { ProductsComponent } from './conponents/products/products.component';
import { CartsComponent } from './conponents/carts/carts.component';






const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'Login',component:LoginComponent},
  {path:'Categories/:danhMuc',component:ListCategoriesComponent},
  {path: 'Products/:id',component:ProductsComponent},
  {path:'Carts/:userName',component:CartsComponent},


  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

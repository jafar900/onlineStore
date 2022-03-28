import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'' , redirectTo:'products' , pathMatch:'full'},
  {path:'products', component : ProductsComponent},
  {path:'cart' , component :CartComponent},
  {path:'signup' , component :SignupComponent},
  {path:'login' , component :LoginComponent},
  {path:'**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

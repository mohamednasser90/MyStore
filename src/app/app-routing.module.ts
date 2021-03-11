import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoauthguardService } from './services/guard/noauthguard.service';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/guard/authguard.service';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  
  {
    path:'login',
    component:LoginComponent,
    canActivate:[NoauthguardService] 
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[NoauthguardService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'myproducts',
    component:MyproductsComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent,
    canActivate:[AuthguardService]
  }
  ,
  {
    path:'**',
    redirectTo:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

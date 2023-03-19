import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { LinkcheckGuard } from './Guards/linkcheck.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:AllproductsComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"overview",component:ProductOverviewComponent},
  {path:"user",component:UserComponent,canActivate:[LinkcheckGuard]},
  {path:"wishlist",component:WishlistComponent,canActivate:[LinkcheckGuard]},
  {path:"cart",component:CartComponent,canActivate:[LinkcheckGuard]},
  {path:"successful",component:CheckoutComponent,canActivate:[LinkcheckGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

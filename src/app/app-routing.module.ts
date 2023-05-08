import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'Users', component: UserComponent},
  {path: 'Products', component: ProductComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add-product', component: AddProductComponent }
];


console.log(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CContactComponent } from './contact/c-contact/c-contact.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsComponent } from './products/products.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers '/home'
  { path: 'home', component: ListCategoriesComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'contact', component: CContactComponent },
  { path: 'form', component: AddProductComponent },
  {path: 'pc/:id', component: ProductsCategoryComponent},
  { path: '**', component: NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

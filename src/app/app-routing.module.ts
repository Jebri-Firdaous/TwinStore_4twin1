import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsComponent } from './products/products.component';
import{ AproposComponent} from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login/login.component'; // Importation de LoginComponent
import { RegisterComponent } from './login/register/register.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers '/home'
  { path: 'home', component: ListCategoriesComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: AddProductComponent },
  {path: 'pc/:id', component: ProductsCategoryComponent},
  { path: 'aPropos', component: AproposComponent } ,
  { path: 'login', component: LoginComponent }, // Ajout de la route pour la page de connexion
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

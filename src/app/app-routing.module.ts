import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ListCategoriesComponent } from './features/products/list-categories/list-categories.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { ProductsCategoryComponent } from './features/products/products-category/products-category.component';
import{ AproposComponent} from './layouts/apropos/apropos.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { LoginComponent } from './features/users/login/login.component'; // Importation de LoginComponent
import { RegisterComponent } from './features/users/register/register.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers '/home'
  { path: 'home', component: ListCategoriesComponent },
  { path: 'product', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) }, // Lazy load du module ProductsModule
  { path: 'contact', component: ContactComponent },
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

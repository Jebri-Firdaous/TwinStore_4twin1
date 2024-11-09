import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Ajoutez ceci

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContainsPipe } from './contains.pipe'; // Importer le pipe ici
import { FilterPipe  } from './filter.pipe';
import { HighlightDirective } from './highlight.directive'; // Importez la directive
import { NotFoundComponent } from './not-found/not-found.component';
import { CProductComponent } from './product/c-product/c-product.component';
import { AddProductComponent } from './add-product/add-product.component';


import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CContactComponent } from './contact/c-contact/c-contact.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categorie', component: ListCategoriesComponent },
  { path: 'product', component: CProductComponent },
  { path: 'contact', component: CContactComponent},
  { path: 'form', component: AddProductComponent },
  { path: '**', component: NotFoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe ,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule  // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

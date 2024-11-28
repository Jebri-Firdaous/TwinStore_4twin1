import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CContactComponent } from './contact/c-contact/c-contact.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';


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
    AddProductComponent,
    ProductsCategoryComponent,
    ProductsComponent
  
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule  // Ajoutez FormsModule ici
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

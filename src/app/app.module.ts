import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Ajoutez ceci

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { ContainsPipe } from './shared/pipes/contains.pipe'; // Importer le pipe ici
import { FilterPipe  } from './shared/pipes/filter.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive'; // Importez la directive
import { NotFoundComponent } from './layouts/not-found/not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductsCategoryComponent } from './features/products/products-category/products-category.component';


@NgModule({
  declarations: [
    AppComponent,
 HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContainsPipe ,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent

  
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule , // Ajoutez FormsModule ici
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

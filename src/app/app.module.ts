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

import { ListCategoriesComponent } from './list-categories/list-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

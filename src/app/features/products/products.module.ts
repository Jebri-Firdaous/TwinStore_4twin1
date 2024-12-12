import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListCategoriesComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class ProductsModule { }

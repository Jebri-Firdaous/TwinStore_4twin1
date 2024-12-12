import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products';


@Component({
  selector: 'app-form-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
 /* product: Product= new Product();
  list: Product[] = [];

  onSave(form: any): void {
    if (form.valid) {
      this.product.id = this.list.length + 1; // ID auto-incrémenté
      this.list.push({ ...this.product }); // Ajout du produit
      form.reset(); // Réinitialiser le formulaire
    }
  }*/

    productForm: FormGroup;
  productList: Product[] = [];
  constructor(private formbuilder: FormBuilder) {
    this.productForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-ZÀ-ÿ ]*')]],
      image: [''],
      categoryId: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      brand: [''],
      promotion: ['', [Validators.pattern('^(0|[1-9][0-9]?)$')]]
    });
  }

  onSave(): void {
    if (this.productForm.valid) {
      const newProduct = { ...this.productForm.value, id: this.productList.length + 1 };
      this.productList.push(newProduct);
      console.log('Produit ajouté :', newProduct);
      this.productForm.reset();
    }
  }
}

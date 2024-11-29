import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  titre: string = "";
  filteredCategories: Categorie[] = []; // Propriété pour stocker les catégories filtrées
  addLike(category:Categorie):void {
    category.nbrLike++;

 }
  categories: Categorie[] = [
    { id: 1, title: 'Hijabs et Écharpes', image: 'assets/images/categories/esharp.png', description: 'Une large sélection de hijabs et écharpes pour compléter votre tenue.', available: true, nbrLike:10 },
    { id: 2, title: 'Tuniques', image: 'assets/images/categories/tunique.png', description: 'Des tuniques élégantes et confortables adaptées à toutes les occasions.', available: true ,nbrLike:100},
    { id: 3, title: 'Robes', image: 'assets/images/categories/robe.jpg', description: 'Robes chic et modernes pour un look raffiné.', available: true,nbrLike:10 },
    { id: 4, title: 'Pantalons', image: 'assets/images/categories/pantalon.png', description: 'Pantalons stylés et confortables pour tous les styles.', available: true,nbrLike:20 },
    { id: 5, title: 'Jupes', image: 'assets/images/categories/jupe.png', description: 'Des jupes élégantes et variées pour toutes les saisons.', available: true,nbrLike:150 },
    { id: 6, title: 'Sets et Ensembles', image: 'assets/images/categories/sets.png', description: 'Des ensembles coordonnés pour un look parfait et sans effort.', available: true,nbrLike:300 },
    { id: 7, title: 'Accessoires', image: 'assets/images/categories/accessory.png', description: 'Des accessoires tendance pour compléter chaque look.', available: true,nbrLike:46 },
    { id: 8, title: 'Sacs à dos', image: 'assets/images/categories/sac a dos.png', description: 'Des sacs à dos pratiques et stylés pour vos déplacements quotidiens.', available: true,nbrLike:120 },
    { id: 9, title: 'Sacs à main', image: 'assets/images/categories/sac a main.png', description: 'Des sacs à main élégants et fonctionnels pour chaque occasion.', available: true ,nbrLike:35},
  ];

  constructor() {
    this.filteredCategories = this.categories;
  }

  filterCategories() {
    if (this.titre === '') {
      this.filteredCategories = this.categories;
    } else {
      this.filteredCategories = this.categories
        .filter(categorie => categorie.title.toLowerCase().includes(this.titre.toLowerCase()))
        .sort((a, b) => a.title.localeCompare(b.title)); 
    }
  
    if (this.filteredCategories.length === 0) {
      this.showNoCategoriesFoundAlert();
    }
  }

  showNoCategoriesFoundAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Aucune catégorie trouvée',
      text: `Aucune catégorie trouvée avec le nom "${this.titre}".`,
      confirmButtonText: 'Ok'
    });
  }

  getDescription(title: string, description: string) {
    Swal.fire({
      title: title, 
      text: description,
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  }
}
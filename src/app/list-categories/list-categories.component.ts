import { Component } from '@angular/core';


import { Categorie } from '../models/categorie'; // Importez la classe Categorie

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],

})
export class ListCategoriesComponent {
 getDescription(description:string){
    alert (description);
  }
  titre : string = "";

  categories: Categorie[] = [
    { id: 1, title: 'Hijabs et Écharpes', image: 'assets/images/esharp.png', description: 'Une large sélection de hijabs et écharpes pour compléter votre tenue.', available: true },
    { id: 2, title: 'Tuniques', image: 'assets/images/tunique.png', description: 'Des tuniques élégantes et confortables adaptées à toutes les occasions.', available: false },
    { id: 3, title: 'Robes', image: 'assets/images/robe.jpg', description: 'Robes chic et modernes pour un look raffiné.', available: true },
    { id: 4, title: 'Pantalons', image: 'assets/images/pantalon.png', description: 'Pantalons stylés et confortables pour tous les styles.', available: true },
    { id: 5, title: 'Jupes', image: 'assets/images/jupe.png', description: 'Des jupes élégantes et variées pour toutes les saisons.', available: true },
    { id: 6, title: 'Sets et Ensembles', image: 'assets/images/sets.png', description: 'Des ensembles coordonnés pour un look parfait et sans effort.', available: false },
    { id: 7, title: 'Accessoires', image: 'assets/images/accessory.png', description: 'Des accessoires tendance pour compléter chaque look.', available: false },
    { id: 8, title: 'Sacs à dos', image: 'assets/images/sac a dos.png', description: 'Des sacs à dos pratiques et stylés pour vos déplacements quotidiens.', available: true },
    { id: 9, title: 'Sacs à main', image: 'assets/images/sac a main.png', description: 'Des sacs à main élégants et fonctionnels pour chaque occasion.', available: true },
  ];
  
}

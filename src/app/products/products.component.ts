import { Component } from '@angular/core';
import { Product } from '../models/products';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  name: string = "";


  list: Product[] = [];
  filteredList: Product[] = []; 
  showAvailabilityFilter: boolean = false; 
  selectedAvailability: string = ''; 
  showCategorieFilter: boolean = false; 
  ShowPriceFilter: boolean = false;
  ShowNomSearch: boolean = false;


  ngOnInit() {
    this.list = this.listProducts;
    this.filteredList = this.list; 
  }
  onPriceChange(order: string): void {
    if (order === 'asc') {
      this.filteredList = [...this.filteredList].sort((a, b) => a.price - b.price); 
    } else if (order === 'desc') {
      this.filteredList = [...this.filteredList].sort((a, b) => b.price - a.price); 
    }
  }

  onFilterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedFilter = selectElement.value;
  
    this.showAvailabilityFilter = selectedFilter === 'availability';
    this.showCategorieFilter = selectedFilter === 'category';
    this.ShowPriceFilter = selectedFilter === 'price';
    this.ShowNomSearch = selectedFilter === 'Nom';
  
    if (this.showAvailabilityFilter) {
      this.filteredList = this.list.filter(product => product.availability === true);
    } else {

      this.filteredList = this.list;
    }
  

    if (!this.showAvailabilityFilter && !this.showCategorieFilter && !this.ShowPriceFilter && !this.ShowNomSearch) {
      this.filteredList = this.list;
    }
  }
  
  onCategoryChange(event: Event): void {
    const selectedCategoryId = (event.target as HTMLSelectElement).value;

    if (selectedCategoryId) {
      this.filteredList = this.list.filter(
        product => product.categoryId === parseInt(selectedCategoryId, 10)
      );
    } else {
      this.filteredList = this.list; 
    }
  }
  selectedCategoryId: string = '';


  onAvailabilityChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedAvailability = selectElement.value;
  
    if (this.selectedAvailability === 'true') {
      this.filteredList = this.list.filter(product => product.availability === true);
    } else if (this.selectedAvailability === 'false') {
      this.filteredList = this.list.filter(product => product.availability === false);
    } else {

      this.filteredList = this.list;
    }
  }
  

  filterProducts() {
    this.filteredList = this.list.filter(product => {
      const matchesAvailability = !this.selectedAvailability || product.availability.toString() === this.selectedAvailability;
      const matchesCategory = !this.selectedCategoryId || product.categoryId === parseInt(this.selectedCategoryId, 10);
      return matchesAvailability && matchesCategory;
    });
  }
  filterProduits() {
    if (this.name === '') {

      this.filteredList = this.listProducts;
    } else {

      this.filteredList = this.listProducts
        .filter(categorie => categorie.name.toLowerCase().includes(this.name.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name)); // Trie par titre
    }
  

    if (this.filteredList.length === 0) {
      this.showNoProductsFoundAlert();
    }
  }
  showNoProductsFoundAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Aucun produit trouvé',
      text: `Aucun produit trouvé avec le nom "${this.name}".`,
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {

        this.filteredList = [...this.list];
      }
    });
  }
  
  
  

  listProducts: Product[] = [
    { id: 1, name: "Hijab en soie de luxe", image: "assets/images/produits/foulards/soieLuxe.png", categoryId: 1, description: "Une sélection de hijabs en soie de qualité supérieure, élégants et confortables.", price: 40000, brand: "Élégance", promotion: 25, availability: true },
    { id: 2, name: "Hijab en laine mérinos", image: "assets/images/produits/foulards/laine.png", categoryId: 1, description: "Hijab doux et chaud en laine mérinos pour l'hiver.", price: 25000, brand: "Élégance", promotion: 0, availability: true },
    { id: 3, name: "Hijab en coton bio", image: "assets/images/produits/foulards/coton.png", categoryId: 1, description: "Hijab confortable en coton bio, respectueux de l'environnement.", price: 30000, brand: "Eco Mode", promotion: 0, availability: false },
    { id: 4, name: "Hijab avec broderie dorée", image: "assets/images/produits/foulards/dore.png", categoryId: 1, description: "Hijab élégant avec broderie dorée pour une touche sophistiquée.", price: 50000, brand: "Glamour", promotion: 0, availability: true },
    { id: 5, name: "Hijab de sport", image: "assets/images/produits/foulards/sport.png", categoryId: 1, description: "Hijab spécialement conçu pour les activités sportives, léger et respirant.", price: 10000, brand: "Active Wear", promotion: 0, availability: false },
    { id: 6, name: "Hijab de soirée en satin", image: "assets/images/produits/foulards/satin.png", categoryId: 1, description: "Hijab en satin pour un look chic lors de vos soirées.", price: 25000, brand: "Luxury Mode", promotion: 0 , availability: true},
  
    { id: 7, name: "Tunique légère en coton", image: "assets/images/produits/tunique/coton.jpg", categoryId: 2, description: "Tunique en coton doux, parfaite pour les journées chaudes et stylées.", price: 65000, brand: "Mode Élégante", promotion: 0 , availability: true},
    { id: 8, name: "Tunique en soie de printemps", image: "assets/images/produits/tunique/satin.png", categoryId: 2, description: "Tunique élégante en soie légère pour le printemps.", price: 79000, brand: "Finesse", promotion: 0 , availability: false},
    { id: 9, name: "Tunique oversize", image: "assets/images/produits/tunique/oversize.png", categoryId: 2, description: "Tunique oversize moderne et confortable, adaptée à toutes les tailles.", price: 45000, brand: "Street Mode", promotion: 35 , availability: true},
    { id: 10, name: "Tunique brodée", image: "assets/images/produits/tunique/bordee.png", categoryId: 2, description: "Tunique en coton avec broderie traditionnelle pour un look unique.", price: 55000, brand: "Tradition", promotion: 0 , availability: true},
    { id: 11, name: "Tunique de soirée en velours", image: "assets/images/produits/tunique/velour.png", categoryId: 2, description: "Tunique en velours somptueux, idéale pour vos sorties de soirée.", price: 95000, brand: "Night Elegance", promotion: 0 , availability: true},
    { id: 12, name: "Tunique à manches 3/4", image: "assets/images/produits/tunique/3-4.png", categoryId: 2, description: "Tunique simple et élégante à manches 3/4 pour un look décontracté.", price: 35000, brand: "Casual Chic", promotion: 0 , availability: false},
  
    { id: 13, name: "Robe longue chic", image: "assets/images/produits/robe/chic.jpg", categoryId: 3, description: "Robe longue et élégante pour un look raffiné et moderne.", price: 85000, brand: "Chic Couture", promotion: 0 , availability: true},
    { id: 14, name: "Robe de soirée en dentelle", image: "assets/images/produits/robe/dentelle.jpg", categoryId: 3, description: "Robe de soirée en dentelle délicate, parfaite pour des occasions spéciales.", price: 200000, brand: "Elegance Couture", promotion: 0 , availability: true},
    { id: 15, name: "Robe maxi en coton", image: "assets/images/produits/robe/maxi.jpg", categoryId: 3, description: "Robe maxi en coton doux pour un look décontracté et confortable.", price: 86000, brand: "Comfort Fashion", promotion: 40 , availability: true},
    { id: 16, name: "Robe moulante", image: "assets/images/produits/robe/moulante.jpg", categoryId: 3, description: "Robe moulante en tissu extensible pour un look sexy et élégant.", price: 67000, brand: "Seduction", promotion: 0 , availability: false},
    { id: 17, name: "Robe à volants", image: "assets/images/produits/robe/volant.jpg", categoryId: 3, description: "Robe avec des volants pour un look aérien et romantique.", price: 56000, brand: "Romance Couture", promotion: 0 , availability: true},
    { id: 18, name: "Robe droite en laine", image: "assets/images/produits/robe/laine.jpg", categoryId: 3, description: "Robe droite en laine, parfaite pour l'hiver et les occasions formelles.", price: 37000, brand: "Winter Chic", promotion: 0 , availability: true},
  
    { id: 19, name: "Pantalon slim fit", image: "assets/images/produits/pantalon/slim.jpg", categoryId: 4, description: "Pantalon stylé et confortable, parfait pour toutes les occasions.", price: 36000, brand: "Casual Mode", promotion: 0 , availability: true},
    { id: 20, name: "Pantalon en lin léger", image: "assets/images/produits/pantalon/lin.jpg", categoryId: 4, description: "Pantalon léger en lin pour un confort optimal pendant l'été.", price: 30000, brand: "Summer Breeze", promotion: 0 , availability: true},
    { id: 21, name: "Pantalon cargo", image: "assets/images/produits/pantalon/cargo.jpg", categoryId: 4, description: "Pantalon cargo robuste et pratique, idéal pour les activités extérieures.", price: 45000, brand: "Outdoor Gear", promotion: 26, availability: true },
    { id: 22, name: "Pantalon en velours", image: "assets/images/produits/pantalon/velours.jpg", categoryId: 4, description: "Pantalon en velours doux et confortable pour les journées fraîches.", price: 66000, brand: "Velvet Style", promotion: 0 , availability: false},
    { id: 23, name: "Pantalon palazzo", image: "assets/images/produits/pantalon/palazzo.jpg", categoryId: 4, description: "Pantalon large et fluide pour un look élégant et décontracté.", price: 34000, brand: "Boho Chic", promotion: 0, availability: true },
    { id: 24, name: "Pantalon de costume", image: "assets/images/produits/pantalon/costume.jpg", categoryId: 4, description: "Pantalon de costume classique pour un look professionnel et raffiné.", price: 52000, brand: "Formal Attire", promotion: 0, availability: true },
  
    { id: 25, name: "Jupe élégante en lin", image: "assets/images/produits/jupe/lin.jpg", categoryId: 5, description: "Jupe légère en lin, idéale pour les journées d'été et les soirées décontractées.", price: 37500, brand: "Été Mode", promotion: 50 , availability: true},
    { id: 26, name: "Jupe en denim", image: "assets/images/produits/jupe/denim.jpg", categoryId: 5, description: "Jupe en denim classique, parfaite pour un look décontracté et tendance.", price: 37000, brand: "Denim Style", promotion: 0, availability: true },
    { id: 27, name: "Jupe midi en soie", image: "assets/images/produits/jupe/midi.jpg", categoryId: 5, description: "Jupe midi élégante en soie, idéale pour des occasions formelles.", price: 64600, brand: "Luxury Wear", promotion: 0, availability: true },
    { id: 28, name: "Jupe évasée", image: "assets/images/produits/jupe/evase.jpg", categoryId: 5, description: "Jupe évasée pour un look romantique et féminin.", price: 48500, brand: "Feminine Chic", promotion: 0 , availability: true},
    { id: 29, name: "Jupe plissée", image: "assets/images/produits/jupe/plisse.jpg", categoryId: 5, description: "Jupe plissée élégante pour un look sophistiqué et moderne.", price: 68500, brand: "Modern Style", promotion: 0, availability: false },
    { id: 30, name: "Jupe en cuir", image: "assets/images/produits/jupe/cuir.jpg", categoryId: 5, description: "Jupe en cuir pour un look rock et audacieux.", price: 95600, brand: "Rebel Fashion", promotion: 0 , availability: true},
  
    { id: 31, name: "Ensemble de sport", image: "assets/images/produits/sets/ensembleSport.png", categoryId: 6, description: "Ensemble sportif confortable et stylé pour vos entraînements.", price: 62000, brand: "Sport Mode", promotion: 30, availability: true },
    { id: 32, name: "Ensemble chic pour soirée", image: "assets/images/produits/sets/ensembleChic.png", categoryId: 6, description: "Ensemble élégant pour les soirées formelles, parfait pour un look raffiné.", price: 156000, brand: "Evening Couture", promotion: 0 , availability: false},
    { id: 33, name: "Ensemble de plage", image: "assets/images/produits/sets/plage.png", categoryId: 6, description: "Ensemble léger et confortable pour les journées à la plage.", price: 66000, brand: "Beach Style", promotion: 0 , availability: true},
    { id: 34, name: "Ensemble d'été", image: "assets/images/produits/sets/ensembleEte.png", categoryId: 6, description: "Ensemble frais et confortable, parfait pour les journées d'été.", price: 68650, brand: "Summer Vibes", promotion: 0, availability: false },
    { id: 35, name: "Ensemble de travail", image: "assets/images/produits/sets/travail.png", categoryId: 6, description: "Ensemble professionnel pour un look moderne et soigné au bureau.", price: 96750, brand: "Business Wear", promotion: 0, availability: true },
    { id: 36, name: "Ensemble décontracté", image: "assets/images/produits/sets/ensembleDecontracte.png", categoryId: 6, description: "Ensemble décontracté pour un look quotidien confortable et stylé.", price: 63000, brand: "Casual Mode", promotion: 0 , availability: true},
  
    { id: 37, name: "Ceinture en cuir", image: "assets/images/produits/accessoires/ceintureCuir.png", categoryId: 7, description: "Ceinture en cuir de haute qualité, élégante et durable.", price: 55000, brand: "Mode Élégante", promotion: 0 , availability: true},
    { id: 38, name: "Chapeau d'été", image: "assets/images/produits/accessoires/chapeauEte.png", categoryId: 7, description: "Chapeau léger et stylé pour vous protéger du soleil.", price: 25000, brand: "Summer Gear", promotion: 0 , availability: true},
    { id: 39, name: "Gants en cuir", image: "assets/images/produits/accessoires/gantsCuir.png", categoryId: 7, description: "Gants en cuir élégants, parfaits pour l'hiver et les occasions formelles.", price: 45000, brand: "Elegance", promotion: 0 , availability: true},
    { id: 40, name: "Lunettes de soleil", image: "assets/images/produits/accessoires/lunettesSoleil.png", categoryId: 7, description: "Lunettes de soleil modernes et stylées pour vos journées ensoleillées.", price: 375600, brand: "Sun Style", promotion: 0, availability: false },
    { id: 41, name: "Rouge à lèvres mat", image: "assets/images/produits/accessoires/rougeALèvresMat.png", categoryId: 7, description: "Rouge à lèvres mat longue tenue, parfait pour un look élégant et sophistiqué.", price: 26000, brand: "Glamour Touch", promotion: 0 , availability: true},
    { id: 42, name: "Bracelet en argent", image: "assets/images/produits/accessoires/braceletArgent.png", categoryId: 7, description: "Bracelet en argent fin, avec un design moderne et raffiné.", price: 650000, brand: "Silver Elegance", promotion: 10 , availability: true},
    
  
    { id: 43, name: "Sac à dos en cuir", image: "assets/images/produits/sac_Dos/cuir.png", categoryId: 8, description: "Sac à dos en cuir, pratique et stylé pour vos déplacements quotidiens.", price: 267000, brand: "Voyage Mode", promotion: 0 , availability: true},
    { id: 44, name: "Sac à dos en toile", image: "assets/images/produits/sac_Dos/toile.png", categoryId: 8, description: "Sac à dos en toile, léger et résistant pour les aventures en plein air.", price: 45650, brand: "Outdoor Gear", promotion: 0 , availability: true},
    { id: 45, name: "Sac à dos en polyester", image: "assets/images/produits/sac_Dos/polyster.png", categoryId: 8, description: "Sac à dos durable en polyester pour une utilisation quotidienne.", price: 126000, brand: "Urban Travel", promotion: 25 , availability: true},
    { id: 46, name: "Sac à dos pour ordinateur", image: "assets/images/produits/sac_Dos/ordinateur.png", categoryId: 8, description: "Sac à dos conçu spécialement pour transporter votre ordinateur portable en toute sécurité.", price: 165000, brand: "Tech Gear", promotion: 0 , availability: true},
    { id: 47, name: "Sac à dos pour voyage", image: "assets/images/produits/sac_Dos/voyage.png", categoryId: 8, description: "Sac à dos spacieux et pratique, idéal pour les voyages longue durée.", price: 123000, brand: "Travel Mode", promotion: 0 , availability: true},
    { id: 48, name: "Sac à dos de sport", image: "assets/images/produits/sac_Dos/sport.png", categoryId: 8, description: "Sac à dos léger et fonctionnel pour les activités sportives.", price: 68000, brand: "Sporty Gear", promotion: 0, availability: true },
  
    { id: 49, name: "Sac à main en cuir", image: "assets/images/produits/sacsMain/sacCuir.png", categoryId: 9, description: "Sac à main élégant en cuir, parfait pour vos sorties.", price: 127000, brand: "Luxury Leather", promotion: 15 , availability: true},
    { id: 50, name: "Sac à main en toile", image: "assets/images/produits/sacsMain/sacToile.png", categoryId: 9, description: "Sac à main pratique en toile pour un look décontracté et chic.", price: 65000, brand: "Casual Chic", promotion: 0, availability: false },
    { id: 51, name: "Sac à main à bandoulière", image: "assets/images/produits/sacsMain/sacBandouliere.png", categoryId: 9, description: "Sac à main avec bandoulière ajustable pour plus de confort.", price: 86000, brand: "Urban Wear", promotion: 0 , availability: true},
    { id: 52, name: "Sac à main vintage", image: "assets/images/produits/sacsMain/sacVintage.png", categoryId: 9, description: "Sac à main vintage, élégant et intemporel.", price: 48000, brand: "Vintage Chic", promotion: 0 , availability: true},
    { id: 53, name: "Sac à main en velours", image: "assets/images/produits/sacsMain/sacVelours.png", categoryId: 9, description: "Sac à main en velours, parfait pour vos soirées élégantes.", price: 43500, brand: "Glamour", promotion: 0 , availability: true},
    { id: 54, name: "Sac à main en cuir verni", image: "assets/images/produits/sacsMain/sacCuirVerni.png", categoryId: 9, description: "Sac à main en cuir verni avec une finition brillante.", price: 167000, brand: "Shiny Mode", promotion: 0 , availability: true}
  
  ];

  nbrLike: number=0;
    addLike():void {
    this.nbrLike++;

 }


}


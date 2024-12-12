import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items; // Si le tableau est vide ou la chaîne de recherche est vide, retourner le tableau d'origine
    }

    searchText = searchText.toLowerCase(); // Convertir la chaîne de recherche en minuscules

    // Filtrer les éléments qui contiennent la chaîne de recherche
    return items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
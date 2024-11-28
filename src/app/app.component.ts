import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TwinStore';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
//écoute des changements de route (titre)
  ngOnInit(): void {
    // Écoute des événements de navigation
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd), // Se concentre sur les événements de fin de navigation
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || 'TwinStore'; // Définit un titre par défaut
        })
      )
      .subscribe((pageTitle: string) => {
        this.title = pageTitle; // Met à jour la propriété `title` utilisée dans le composant
        this.titleService.setTitle(pageTitle); // Met à jour le titre de la page dans le navigateur
      });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule, // Assurez-vous que RouterModule est importé
    UsersRoutingModule // Ou tout autre module de routage spécifique
  ],
  exports:[
    RouterModule // Si vous avez des composants qui utilisent routerLink

  ]
})
export class UsersModule { }

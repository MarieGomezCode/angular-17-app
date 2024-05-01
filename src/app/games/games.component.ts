import { Component, EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos de {{ username }} </h3>
   <ul> <!-- Directiva *ngFor -->
      @for(game of games ; track game.id){ <!-- Trackear identificador unico --> 
          <li (click)="fav(game.name)" >{{ game.name }}</li>
      }
   </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username= ''; // Comunicacion de Padre a Hijo
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName:string){
   // alert(`A ${this.username} le gusta jugar a ${gameName}`)
   this.addFavoriteEvent.emit(gameName);//Comunicacion de Hijo a Padre
  }
  games = [
    {
      id:1,
      name:'Uncharte 4'
    },
    {
      id:2,
      name:'Horizon Zero Dawn'
    },
      
    {
      id:3,
      name:'Bloodborne'
    }
  ]
}
//ng generate component games --inline-style --inline-template   --skip-tests 


/*
Emisor de eventos en angular

Un EventEmitter es una clase proporcionada por la biblioteca de Angular @angular/coreque 
facilita la comunicación entre componentes en su aplicación Angular. Básicamente, 
actúa como un mecanismo para que un componente emita (transmita) eventos personalizados 
que otros componentes pueden escuchar y reaccionar.
*/
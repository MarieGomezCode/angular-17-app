import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { // Definicion de la clase 
    username = 'angela';
    isLoggedIn = false; // -> Esta funcionando como un estado
    favGame = ''; //Propiedad para guardar la informacion

    //Metodo que cuando recuperemos el favorito haga algo  
    getFavorite(gameName: string){
      this.favGame = gameName;
    }

    greet(){
      alert('hola!!');
    }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({//decorador que utliza el patron decorador
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],// Aqui agg modulos, componentes
  templateUrl:'./app.component.html',//templateUrl: -> './app.component.html',// aqui tambien puede ir el codigo html ```` template-plantilla CON TEAMPLTE
  styleUrls:['./app.component.css'],//styleUrl:->'./app.component.css'// aqui tambien puede ir el codigo css ```` CON STYLES
})

//El decorado aplica cierta magia a al clase de aqui 
export class AppComponent {
  //title = 'angular-17-app'; // una propiedad por aqui de la clase
  city = 'Barcelona' 
}
/*
  
*/
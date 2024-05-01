import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
     comentario de lo que sea 
    </p>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg?s=1100&c=50&f=jpeg" alt="">

   <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi 
    necessitatibus at nulla quidem expedita similique exercitationem iusto cumque 
    officiis optio laboriosam fuga obcaecati quo, quasi ipsam quibusdam veniam dolores.
   </p>
  `,
  styles: `
    img{
      width:100%;
      height: auto;
    }
  
  
  `,
})
export class CommentsComponent {

}
//ng generate component comments --inline-style --inline-template
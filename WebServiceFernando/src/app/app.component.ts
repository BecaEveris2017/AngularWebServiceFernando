import { Component } from '@angular/core';
import { PostService} from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Beca everis 2017';
  colores=['rojo','negro','azul'];
  mostrarlistacolores=true;
  nombre:string;
  email:string;
  
  addcolor(color){
    this.colores.push(color.value);
    color.value="";
    return false;
  }
  mostrarcolores(){
    this.mostrarlistacolores=!this.mostrarlistacolores;
  }
}

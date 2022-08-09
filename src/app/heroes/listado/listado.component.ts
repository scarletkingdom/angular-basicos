import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Capitán América'];
  public heroeEliminado: string = '';

  borrarHeroe(): void{
    this.heroeEliminado = this.heroes.shift() || '';
  }
}

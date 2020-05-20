import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'; // importamos el servicio q queremos q se utilice en este componente y lo ponemos en el costructor, tambien importamos la interfaz Heroe para ser utlizada aca
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService, private _router: Router) {} // asi se declara en el constructor ese servicio, le ponemos private, el alias q se manejara y de donde proviene osea de la clase HeroesService q fue importada arriba

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); // llamamos la variable _heroesService que es de tipo HeroesService osea q viene del archico de servicios y llamamos al metodo getHeores q devuelve el arreglo
    // console.log(this.heroes);
  }
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}

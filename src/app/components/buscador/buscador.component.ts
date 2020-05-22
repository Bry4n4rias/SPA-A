import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute, // importacion necesaria para agarrar el termino con el path
    private _heroesService: HeroesService // improtacion encesaria para buscar la funcion q esta en los ervicios con la data del arreglo
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      // asi se escucha ese parametro q viene con el path
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
}
// dependiendo del termino q agarremos de buscar/termino, en las rutas esta definido q este componente es el q va a usar esa ruta

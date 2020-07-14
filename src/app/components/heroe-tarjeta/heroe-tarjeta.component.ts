import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {}; // asi podemos utilziar esta variable en el componente padre o a la inversa en este caso con buscador-componente
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>; // va emitir un number

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter(); // se inicializa el event emitter
  }

  ngOnInit(): void {}

  verHeroe() {
    // console.log(this.indice);
    this._router.navigate(['/heroe', this.indice]);
    // this.heroeSeleccionado.emit(this.indice);
  }
}

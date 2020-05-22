import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  buscarHeroe(termino: string) {
    // funcion q coge el valor del input
    // console.log(termino);
    this._router.navigate(['/buscar', termino]); // esta funcion q la llamamos desde el html crea el buscador con el path buscar y le pasamos el termino a busar como esta definido en routes
    // para usar los path hay q usar el alias _router de tipo Router q viene del angular core y se mete en el constructor
    // como al disparar el evento me va a mandar a la ruta biscar con un termino, en el componente buscador(lo definimos en routes) importamos activaterouted q es lo q me va a agarrar ese termino y hacer con el lo q queramos
  }
}

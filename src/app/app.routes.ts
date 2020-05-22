import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // clases de dangular necesarias para trabjar con rutas

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, // Este path se utiliza para que vaya a un menu cuando no se encuentre la pagina
];

// export const FeatureRoutingModule = RouterModule.forRoot(ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(routes)], // codigo de angular
  exports: [RouterModule], // codigo de angular
})
export class FeatureRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // modulo para consumir servicios en este caso el arreglo de heroes

// rutas
import { FeatureRoutingModule } from './app.routes';

// servicios
import { HeroesService } from './services/heroes.service';
// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ], // aca van todos los componente de renderizado osea los html
  imports: [BrowserModule, FeatureRoutingModule, FormsModule, HttpClientModule], // aca van los componentes de rutas
  providers: [HeroesService], // aca van los servicios
  bootstrap: [AppComponent],
})
export class AppModule {}

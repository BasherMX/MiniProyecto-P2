import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideoComponent } from './video/video.component';
import { TiendaComponent } from './tienda/tienda.component';
import { DomseguroPipe } from './domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    SearchComponent,
    UnHeroeComponent,
    UsuariosComponent,
    VideoComponent,
    TiendaComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Registros {
  constructor(
        public nombre: string,
        public apellidos: string,
        public sexo: string,
        public email: string,
        public fechanac: string
    ) { }
}


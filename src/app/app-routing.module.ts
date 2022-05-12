import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideoComponent } from './video/video.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'heroe/:id', component: UnHeroeComponent},
  {path: 'buscador/:nombreh', component:SearchComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'video', component: VideoComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

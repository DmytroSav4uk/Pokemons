import { Routes } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';

export const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path:'list', component:ListComponent},
  {path:'pokemon/:name',component:PokemonComponent}
];
